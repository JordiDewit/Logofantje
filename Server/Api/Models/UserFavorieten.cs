using System;
namespace Api.Models
{
    public class UserFavorieten
    {
        #region Properties
        public int GebruikerId { get; set; }
        public int MateriaalId { get; set; }
        public Gebruiker Gebruiker { get; set; }
        public Therapiemateriaal Materiaal { get; set; }
        #endregion
    }
}
