using System;
using System.IO;
using Api.Models;
using Microsoft.AspNetCore.Hosting;

namespace Api.Data.Repositories
{
    public class MateriaalDataInitializer
    {

        private readonly MateriaalContext _dbContext;
        private readonly IHostingEnvironment env;

        public MateriaalDataInitializer(MateriaalContext context, IHostingEnvironment env)
        {
            _dbContext = context;
            this.env = env;
        }

        public void InitializeData()
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
            }
        }
        private string GetFilePath(string path)
        {
            return env.WebRootFileProvider.GetFileInfo(path)?.PhysicalPath;
        }
    }
}
