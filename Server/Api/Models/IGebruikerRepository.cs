namespace Api.Models
{
    public interface IGebruikerRepository
    {
        Gebruiker GetBy(string email);
        void Add(Gebruiker gebruiker);
        void SaveChanges();
    }
}
