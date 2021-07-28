using System;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mappers
{
    public class TherapiemateriaalConfiguration : IEntityTypeConfiguration<Therapiemateriaal>
    {
        public void Configure(EntityTypeBuilder<Therapiemateriaal> builder)
        {
            builder.ToTable("Therapiemateriaal");

            builder.Property(m => m.Id).ValueGeneratedOnAdd();

            //Properties
            builder.Property(m => m.Naam)
                .HasColumnName("Naam")
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(m => m.Thema)
                .HasColumnName("Thema")
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(m => m.Leergebied)
                .HasColumnName("Leergebied")
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}
