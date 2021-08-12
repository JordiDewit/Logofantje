using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Api.DTOs;

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

        public UserController(IGebruikerRepository userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet()]
        public ActionResult<GebruikerDTO> GetUser()
        {
            Gebruiker gebruiker = _userRepo.GetBy(User.Identity.Name);
            return new GebruikerDTO(gebruiker);
        }
    }

}
