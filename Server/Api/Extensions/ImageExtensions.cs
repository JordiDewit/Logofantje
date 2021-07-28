using System;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace Api.Extensions
{
    public static class ImageExtensions
    {
        public static byte[] ToByteArray(this IFormFile formFile)
        {
            byte[] result = new byte[0];
            if (formFile != null)
            {
                using (var ms = new MemoryStream())
                {
                    formFile.CopyTo(ms);
                    result = ms.ToArray();
                }
            }
            return result;
        }

        public static string ToImageSource(this byte[] img)
        {
            string result = "";

            if (img != null && img.Length != 0)
            {
                string base64 = Convert.ToBase64String(img);
                result = String.Format("data:image/gif;base64,{0}", base64);
            }

            return result;
        }

    }
}
