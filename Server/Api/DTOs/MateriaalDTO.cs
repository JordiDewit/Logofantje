using System;
using System.ComponentModel.DataAnnotations;

namespace Api.DTOs
{
    public class MateriaalDTO
    {
        [Required]
        public string Naam { get; set; }
        [Required]
        public string Thema { get; set; }
        [Required]
        public string Leergebied { get; set; }
        [Required]
        public byte[] Foto { get; set; }
        [Required]
        public byte[] Pdf { get; set; }
    }
}
