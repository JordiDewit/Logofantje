using System;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mappers
{
    public class UserFavorietenConfiguration : IEntityTypeConfiguration<UserFavorieten>
    {
        public void Configure(EntityTypeBuilder<UserFavorieten> builder)
        {
            builder.ToTable("Favorieten");
            builder.HasKey(f => new { f.GebruikerId, f.MateriaalId });
            builder.HasOne(f => f.Gebruiker).WithMany(u => u.Favorieten).HasForeignKey(f => f.GebruikerId);
            builder.HasOne(f => f.Materiaal).WithMany().HasForeignKey(f => f.MateriaalId);

        }
    }
}
