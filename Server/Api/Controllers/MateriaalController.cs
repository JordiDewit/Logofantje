using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Mvc;


namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class MateriaalController : ControllerBase
    {
        private readonly IMateriaalRepository _materiaalRepo;

        public MateriaalController(IMateriaalRepository context)
        {
            _materiaalRepo = context;
        }
        //Get methoden
        [HttpGet]
        public IEnumerable<Therapiemateriaal> GetMaterialen()
        {
            return _materiaalRepo.GetAll();
        }
        [HttpGet("{id}")]
        public ActionResult<Therapiemateriaal> GetMateriaal(int id)
        {
            Therapiemateriaal mat = _materiaalRepo.GetBy(id);
            if (mat == null)
                return NotFound();
            return mat;
        }
        //Post methodes
      
        [HttpPost]
        public ActionResult<Therapiemateriaal> PostMateriaal(MateriaalDTO mat)
        {
            Therapiemateriaal matToCreate = new Therapiemateriaal()
            {
                Naam = mat.Naam,
                Thema = mat.Thema,
                Leergebied = mat.Leergebied,
                Foto = mat.Foto
            };
            Console.WriteLine(matToCreate);
            _materiaalRepo.Add(matToCreate);
            _materiaalRepo.SaveChanges();

            return CreatedAtAction(nameof(GetMateriaal), new { id = matToCreate.Id },
                matToCreate);
        }

      //Put methode
      [HttpPut("{id}")]
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
