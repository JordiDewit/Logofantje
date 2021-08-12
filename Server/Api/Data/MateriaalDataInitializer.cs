using System;
using System.IO;
using System.Linq;
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
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

                Therapiemateriaal tm1 = new Therapiemateriaal("Het aapjesspel", "Zomer", "Lezen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm2 = new Therapiemateriaal("Het bordspel", "Winter", "Rekenen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm3 = new Therapiemateriaal("Het kuikentjesspel", "Herfst", "Lezen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm4 = new Therapiemateriaal("Rol de piraat", "Pasen", "Taal", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm5 = new Therapiemateriaal("Schuifspel", "Kerstmis", "Rekenen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm6 = new Therapiemateriaal("Het strookjesspel", "Sinterklaas", "Algemeen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm7 = new Therapiemateriaal("Het wasknijperspel", "Sinterklaas", "Algemeen", "Resources/Images/tm1.JPG", "Resources/Pdf/Het-varkenspel.pdf");
                _dbContext.AddRange(tm1, tm2, tm3, tm4, tm5, tm6, tm7);
                _dbContext.SaveChanges();

                Gebruiker admin = new Gebruiker { Email = "yna.admin@artevelde.be", Name = "Yna", Lastname = "Bauwens", Functie="Logopedist" };
                _dbContext.Gebruikers.Add(admin);
                await CreateUser(admin.Email, "P@ssword123");
                Gebruiker gebruiker = new Gebruiker { Email = "mieke.bosman@gmail.com", Name = "Mieke", Lastname = "Bosman", Functie = "Student" };
                _dbContext.Add(gebruiker);
                await CreateUser(gebruiker.Email, "P@ssword321");
                gebruiker.AddFavoriet(_dbContext.Materialen.First());
                _dbContext.SaveChanges();
            }
        }

        private async Task CreateUser(string email, string password)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
        }
    }
}
