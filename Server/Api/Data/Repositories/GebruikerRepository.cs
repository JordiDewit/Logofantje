using System.Linq;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Repositories
{
    public class GebruikerRepository : IGebruikerRepository
    {
        private readonly MateriaalContext _context;
        private readonly DbSet<Gebruiker> _users;

        public GebruikerRepository(MateriaalContext context)
        {
            _context = context;
            _users = context.Gebruikers;
        }

        public void Add(Gebruiker gebruiker)
        {
            _users.Add(gebruiker);
        }

        public Gebruiker GetBy(string email)
        {
            return _users.Include(g => g.Favorieten).ThenInclude(g => g.Materiaal).SingleOrDefault(g => g.Email == email);
        }
   
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
