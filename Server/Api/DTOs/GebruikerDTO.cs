using System;
using System.Collections.Generic;
using Api.Models;

namespace Api.DTOs
{
    public class GebruikerDTO
    {
        #region Properties
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Functie { get; set; }
        public string Role { get; set; }
        public IEnumerable<Therapiemateriaal> Materiaal { get; set; }
        #endregion

        #region Constructor
        public GebruikerDTO() { }
        public GebruikerDTO(Gebruiker gebruiker) : this()
        {
            Name = gebruiker.Name;
            LastName = gebruiker.Lastname;
            Email = gebruiker.Email;
            Functie = gebruiker.Functie;
            Role = gebruiker.Role;
            Materiaal = gebruiker.FavorietMateriaal;
        }
        #endregion
    }
}
