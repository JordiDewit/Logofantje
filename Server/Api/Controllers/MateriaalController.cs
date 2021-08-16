using System;
using System.Collections.Generic;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class MateriaalController : ControllerBase
    {
        private readonly IMateriaalRepository _materiaalRepo;
        public readonly IGebruikerRepository _userRepo;

        public MateriaalController(IMateriaalRepository context)
        {
            _materiaalRepo = context;
        }
        //Get methoden
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Therapiemateriaal> GetMaterialen()
        {
            return _materiaalRepo.GetAll();
        }
        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<Therapiemateriaal> GetMateriaal(int id)
        {
            Therapiemateriaal mat = _materiaalRepo.GetBy(id);
            if (mat == null)
                return NotFound();
            return mat;
        }

        [HttpGet("Favorieten")]
        public IEnumerable<Therapiemateriaal> GetFavorieten()
        {
            Gebruiker gebruiker = _userRepo.GetBy(User.Identity.Name);
            return gebruiker.FavorietMateriaal;
        }
        //Post methodes
      
        [HttpPost]
        [Authorize(Policy = "admin")]
        public ActionResult<Therapiemateriaal> PostMateriaal(MateriaalDTO mat)
        {
            Therapiemateriaal matToCreate = new Therapiemateriaal()
            {
                Naam = mat.Naam,
                Thema = mat.Thema,
                Leergebied = mat.Leergebied,
                Foto = mat.Foto,
                Pdf = mat.Pdf
            };
            Console.WriteLine(matToCreate);
            _materiaalRepo.Add(matToCreate);
            _materiaalRepo.SaveChanges();

            return CreatedAtAction(nameof(GetMateriaal), new { id = matToCreate.Id },
                matToCreate);
        }

      //Put methode
      [HttpPut("{id}")]
      [Authorize(Policy = "admin")]
        public IActionResult PutMateriaal(int id, Therapiemateriaal mat)
        {
            if( id != mat.Id)
            {
                return BadRequest();
            }
            _materiaalRepo.Update(mat);
            _materiaalRepo.SaveChanges();
            return NoContent();
        }

        //Delete methode
        [HttpDelete("{id}")]
        [Authorize(Policy = "admin")]
        public IActionResult DeleteMateriaal(int id)
        {
            Therapiemateriaal mat = _materiaalRepo.GetBy(id);
            if (mat == null)
            {
                return NotFound();
            }
            _materiaalRepo.Delete(mat);
            _materiaalRepo.SaveChanges();
            return NoContent();
        }
    }

}
