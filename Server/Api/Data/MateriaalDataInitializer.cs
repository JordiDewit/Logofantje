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
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {

                Therapiemateriaal tm1 = new Therapiemateriaal("Het aapjesspel", "Zomer", "Lezen", "Resources/Images/aapjesspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm2 = new Therapiemateriaal("Het bordspel", "Winter", "Rekenen", "Resources/Images/bordspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm3 = new Therapiemateriaal("Het eekhoornspel", "Herfst", "Lezen", "Resources/Images/eekhoorn.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm4 = new Therapiemateriaal("Het eendenspel", "Lente", "Taal", "Resources/Images/eendspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm5 = new Therapiemateriaal("Het huisjesspel", "Algemeen", "Rekenen", "Resources/Images/huisjesspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm6 = new Therapiemateriaal("Het kersbomenspel", "Kerstmis", "Algemeen", "Resources/Images/kerst.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm7 = new Therapiemateriaal("Piratenbingo", "Algemeen", "Algemeen", "Resources/Images/piratenbingo.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm8 = new Therapiemateriaal("Het schuifjesspel", "Algemeen", "Algemeen", "Resources/Images/schuif.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm9 = new Therapiemateriaal("Het sinterklaasspel", "Algemeen", "Algemeen", "Resources/Images/sintspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm10 = new Therapiemateriaal("Het varkentjesspel", "Algemeen", "Algemeen", "Resources/Images/varkensspel.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                Therapiemateriaal tm11 = new Therapiemateriaal("Het wasknijpertjesspel", "Algemeen", "Algemeen", "Resources/Images/wasknijper.jpg", "Resources/Pdf/Het-varkenspel.pdf");
                _dbContext.AddRange(tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10, tm11);
                _dbContext.SaveChanges();

                Gebruiker admin = new Gebruiker { Email = "yna.admin@artevelde.be", Name = "Yna", Lastname = "Bauwens", Functie="Logopedist" , Role="admin"};
                _dbContext.Gebruikers.Add(admin);
                await CreateUser(admin.Email, "P@ssword123!", "admin");
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
