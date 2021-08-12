using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Identity;

namespace Api.Models
{
    public class Gebruiker
    {
        #region Properties

        public int GebruikerId { get; set; }

        public String Name { get; set; }

        public String Lastname { get; set; }

        public String Email { get; set; }

        public String Functie { get; set; }

        public ICollection<UserFavorieten> Favorieten { get; private set; }

        public IEnumerable<Therapiemateriaal> FavorietMateriaal => Favorieten.Select(f => f.Materiaal);
        #endregion

        #region Constructor
        public Gebruiker()
        {
            Favorieten = new List<UserFavorieten>();
        }
        #endregion
        public void AddFavoriet(Therapiemateriaal therapiemateriaal)
        {
            Favorieten.Add(new UserFavorieten() { MateriaalId = therapiemateriaal.Id, GebruikerId = GebruikerId, Materiaal = therapiemateriaal, Gebruiker = this});
        }
   }
}
