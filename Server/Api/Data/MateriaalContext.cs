using Api.Data.Mappers;
using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class MateriaalContext : IdentityDbContext
    {
        public DbSet<Therapiemateriaal> Materialen { get; set; }
        public DbSet<Gebruiker> Gebruikers { get; set; }
        public MateriaalContext(DbContextOptions<MateriaalContext> options) : base(options){}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new TherapiemateriaalConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new UserFavorietenConfiguration());

        }
    }
}
