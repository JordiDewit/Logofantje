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
        public byte[] Foto { get; set; }
        [Required]
        public byte[] Pdf { get; set; }
        #endregion

        #region Constructors
        public Therapiemateriaal()
        {
            Aangemaakt = DateTime.Now;
        }
        public Therapiemateriaal(string naam, string thema, string leergebied, byte[] foto, byte[] pdf ) : this()
        {
            Naam = naam;
            Thema = thema;
            Leergebied = leergebied;
            Foto = foto;
            Pdf = pdf;
        }
        #endregion
        #region Methods
        public string ImageSource => this.Foto.ToImageSource();
        #endregion
    }
}
