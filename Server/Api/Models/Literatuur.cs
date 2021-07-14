using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Literatuur
    {
        #region Properties
        public int Id { get; set; }
        [Required]
        public string Titel { get; set; }
        public DateTime Toegevoegd { get; set; }
        [Required]
        public string Auteur { get; set; }
        public string beschrijving { get; set; }
        #endregion
        public Literatuur()
        {
            Toegevoegd = DateTime.Now;
        }
        public Literatuur(string titel) : this()
        {
            Titel = titel;
        }
    }
}
