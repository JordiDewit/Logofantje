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

                /*string path1 = "images/tm/AapjesSpel.jpeg";
                string fotoPath = GetFilePath(path1);
                byte[] foto1 = File.ReadAllBytes(fotoPath);

                string path2 = "images/tm/bordSpel.jpeg";
                string fotoPath2 = GetFilePath(path2);
                byte[] foto2 = File.ReadAllBytes(fotoPath2);

                string path3 = "images/tm/kuikentjesSpel.jpeg";
                string fotoPath3 = GetFilePath(path3);
                byte[] foto3 = File.ReadAllBytes(fotoPath3);

                string path4 = "images/tm/rolDePiraat2.jpeg";
                string fotoPath4 = GetFilePath(path4);
                byte[] foto4 = File.ReadAllBytes(fotoPath4);

                string path5 = "images/tm/SchuifSpel.jpeg";
                string fotoPath5 = GetFilePath(path5);
                byte[] foto5 = File.ReadAllBytes(fotoPath5);

                string path6 = "images/tm/StrookjesSpel.jpeg";
                string fotoPath6 = GetFilePath(path6);
                byte[] foto6 = File.ReadAllBytes(fotoPath6);

                string path7 = "images/tm/WasknijperSpel.jpeg";
                string fotoPath7 = GetFilePath(path7);
                byte[] foto7 = File.ReadAllBytes(fotoPath7);

                string pathpdf = "files/pdf/Het-varkenspel.pdf";
                string pdfPath = GetFilePath(pathpdf);
                byte[] testPdf = File.ReadAllBytes(pdfPath);*/

                Therapiemateriaal tm1 = new Therapiemateriaal("Het aapjesspel", "Zomer", "Lezen", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm2 = new Therapiemateriaal("Het bordspel", "Winter", "Rekenen", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm3 = new Therapiemateriaal("Het kuikentjesspel", "Herfst", "Lezen", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm4 = new Therapiemateriaal("Rol de piraat", "Pasen", "Taal", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm5 = new Therapiemateriaal("Schuifspel", "Kerstmis", "Rekenen", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm6 = new Therapiemateriaal("Het strookjesspel", "Sinterklaas", "Algemeen", "Resources/Images/tm1.JPG");
                Therapiemateriaal tm7 = new Therapiemateriaal("Het wasknijperspel", "Sinterklaas", "Algemeen", "Resources/Images/tm1.JPG");
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
