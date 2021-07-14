using System;
using System.ComponentModel.DataAnnotations;

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
        #endregion

        #region Constructors
        public Therapiemateriaal()
        {
            Aangemaakt = DateTime.Now;
        }
        public Therapiemateriaal(string naam, string thema, string leergebied, string foto ) : this()
        {
            Naam = naam;
            Thema = thema;
            Leergebied = leergebied;
            Foto = foto;
        }
        #endregion
    }
}
