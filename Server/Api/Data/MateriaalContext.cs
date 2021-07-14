using System;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class MateriaalContext : DbContext
    {
        public MateriaalContext(DbContextOptions<MateriaalContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Therapiemateriaal>()
                .Property(m => m.Naam).IsRequired().HasMaxLength(50);
            builder.Entity<Therapiemateriaal>()
                .Property(m => m.Thema).IsRequired().HasMaxLength(50);
            builder.Entity<Therapiemateriaal>().
                Property(m => m.Leergebied).IsRequired().HasMaxLength(50);
            builder.Entity<Therapiemateriaal>().
              Property(m => m.Leergebied).IsRequired();

            builder.Entity<Therapiemateriaal>().HasData(
                new Therapiemateriaal { Id = 1, Naam="Spel 1", Thema="Zomer", Leergebied="lezen", Foto="image"},
                new Therapiemateriaal { Id = 2, Naam = "Spel 2", Thema = "Zomer", Leergebied = "rekenen", Foto = "image" },
                new Therapiemateriaal { Id = 3, Naam = "Spel 3", Thema = "Winter", Leergebied = "spellen", Foto = "image" },
                new Therapiemateriaal { Id = 4, Naam = "Spel 4", Thema = "Lente", Leergebied = "spellen", Foto = "image" },
                new Therapiemateriaal { Id = 5, Naam = "Spel 5", Thema = "Herfst", Leergebied = "rekenen", Foto = "image" },
                new Therapiemateriaal { Id = 6, Naam = "Spel 6", Thema = "Herfst", Leergebied = "lezen", Foto = "image" }
                ) ;

        }

        public DbSet<Therapiemateriaal> Materialen { get; set; }
    }
}
