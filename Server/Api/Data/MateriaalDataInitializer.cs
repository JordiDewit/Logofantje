using System;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;

namespace Api.Data.Repositories
{
    public class MateriaalDataInitializer
    {

        private readonly MateriaalContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IHostingEnvironment env;

        public MateriaalDataInitializer(MateriaalContext context, IHostingEnvironment env, UserManager<IdentityUser> userManager)
        {
            _dbContext = context;
            _userManager = userManager;
            this.env = env;
        }

        public async Task InitializeData()
        {
            //_dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

                Therapiemateriaal tm1 = new Therapiemateriaal("Meer/minder dan", "Algemeen", "Rekenen", "Resources/Images/schuif.jpg", "Resources/Pdf/_meerminder dan.pdf");
                Therapiemateriaal tm2 = new Therapiemateriaal("Aapjesspel", "Algemeen", "Algemeen", "Resources/Images/aapjesspel.jpg", "Resources/Pdf/Aapjesspel.pdf");
                _dbContext.AddRange(tm1, tm2);
                _dbContext.SaveChanges();

                Gebruiker admin = new Gebruiker { Email = "ynabauwe@student.arteveldehs.be", Name = "Yna", Lastname = "Bauwens", Functie="Logopedist" , Role="admin"};
                _dbContext.Gebruikers.Add(admin);
                await CreateUser(admin.Email, "W33tjedatik1babbeljufben?", "admin");
                Gebruiker gebruiker = new Gebruiker { Email = "mieke.bosman@gmail.com", Name = "Mieke", Lastname = "Bosman", Functie = "Student", Role="customer"};
                _dbContext.Add(gebruiker);
                await CreateUser(gebruiker.Email, "P@ssword321!", "customer");
                gebruiker.AddFavoriet(_dbContext.Materialen.First());
                _dbContext.SaveChanges();
            }
        }

        private async Task CreateUser(string email, string password, string role)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, role));
        }
    }
}
