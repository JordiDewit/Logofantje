using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IGebruikerRepository _userRepository;
        private readonly IConfiguration _config;

        public AccountController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager,IGebruikerRepository userRepository, IConfiguration config)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _userRepository = userRepository;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<String>> CreateToken(LoginDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.Email);
            if(user != null)
            {
                var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
                if (result.Succeeded)
                {
                    string token = GetToken(user);
                    return Created("", token);
                }
            }
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<String>> Register(RegisterDTO model)
        {
            IdentityUser user = new IdentityUser { UserName = model.Email, Email = model.Email };
            Gebruiker gebruiker = new Gebruiker {
                Name = model.Name,
                Lastname = model.Lastname ,
                Email = model.Email,
                Functie = model.Functie
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                _userRepository.Add(gebruiker);
                _userRepository.SaveChanges();
                string token = GetToken(user);
                return Created("", token);
            }
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpGet("checkusername")]
        public async Task<ActionResult<Boolean>> CheckAvailableUserName(string email)
        {
            var user = await _userManager.FindByNameAsync(email);
            return user == null;
        }

        private String GetToken(IdentityUser user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                null, null, claims, expires: DateTime.Now.AddMinutes(30), signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);

        }

    }
}
