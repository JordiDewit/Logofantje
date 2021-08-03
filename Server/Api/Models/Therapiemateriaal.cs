using System;
using System.ComponentModel.DataAnnotations;
using Api.Extensions;
using Microsoft.AspNetCore.Http;

namespace Api.Models
{
    public class Therapiemateriaal
    {
        #region Properties
        public int Id { get; set; }
        [Required]
        public string Naam { get; set; }
        public DateTime Aangemaakt { get; set; }
        [Required]
        public string Thema { get; set; }
        [Required]
        public string Leergebied { get; set; }
        [Required]
        public string Foto { get; set; }
        [Required]
        public string Pdf { get; set; }
        #endregion

        #region Constructors
        public Therapiemateriaal()
        {
            Aangemaakt = DateTime.Today;
        }
        public Therapiemateriaal(string naam, string thema, string leergebied, string foto, string pdf) : this()
        {
            Naam = naam;
            Aangemaakt = DateTime.Today;
            Thema = thema;
            Leergebied = leergebied;
            Foto = foto;
            Pdf = pdf;
        }
        #endregion
    }
}
