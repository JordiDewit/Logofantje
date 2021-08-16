using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Api.DTOs;
using System;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IGebruikerRepository _userRepo;
        private readonly IMateriaalRepository _matRepo;

        public UserController(IGebruikerRepository userRepo, IMateriaalRepository matRepo)
        {
            _userRepo = userRepo;
            _matRepo = matRepo;
        }
        [HttpGet()]
        public ActionResult<GebruikerDTO> GetUser()
        {
            Gebruiker gebruiker = _userRepo.GetBy(User.Identity.Name);
            return new GebruikerDTO(gebruiker);
        }

        [HttpPost("{id}")]
        public ActionResult<Therapiemateriaal> AddFavoriet(int id)
        {
            Therapiemateriaal mat = _matRepo.GetBy(id);
            if (mat != null)
            {
                try
                {
                    Gebruiker gebruiker = _userRepo.GetBy(User.Identity.Name);
                    gebruiker.AddFavoriet(mat);
                    _userRepo.SaveChanges();
                }catch(InvalidOperationException ex)
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFavoriet(int id)
        {
            Therapiemateriaal mat = _matRepo.GetBy(id);
            if (mat == null)
            {
                return NotFound();
            }
            else
            {
                Gebruiker gebruiker = _userRepo.GetBy(User.Identity.Name);
                gebruiker.RemoveFavoriet(mat);
                _userRepo.SaveChanges();
            }

            return NoContent();
        }
    }
}
