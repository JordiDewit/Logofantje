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

                string path1 = "images/tm/tm1.JPG";
                string fotoPath = GetFilePath(path1);
                byte[] testFoto = File.ReadAllBytes(fotoPath);

                string path2 = "files/pdf/Het-varkenspel.pdf";
                string pdfPath = GetFilePath(path2);
                byte[] testPdf = File.ReadAllBytes(pdfPath);

                Therapiemateriaal tm1 = new Therapiemateriaal("Spel 1", "Zomer", "Lezen", testFoto, testPdf);
                Therapiemateriaal tm2 = new Therapiemateriaal("Spel 2", "Winter", "Rekenen", testFoto, testPdf);
                Therapiemateriaal tm3 = new Therapiemateriaal("Spel 3", "Herfst", "Lezen", testFoto, testPdf);
                Therapiemateriaal tm4 = new Therapiemateriaal("Spel 4", "Pasen", "Taal", testFoto, testPdf);
                Therapiemateriaal tm5 = new Therapiemateriaal("Spel 5", "Kerstmis", "Rekenen", testFoto, testPdf);
                Therapiemateriaal tm6 = new Therapiemateriaal("Spel 6", "Sinterklaas", "Algemeen", testFoto, testPdf);
                Therapiemateriaal tm7 = new Therapiemateriaal("Spel 7", "Sinterklaas", "Algemeen", testFoto, testPdf);
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
