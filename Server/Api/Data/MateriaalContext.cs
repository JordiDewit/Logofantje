using System;
using System.IO;
using System.Reflection;
using Api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class MateriaalContext : DbContext
    {
        public DbSet<Therapiemateriaal> Materialen { get; set; }
        public MateriaalContext(DbContextOptions<MateriaalContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        }
    }
}
