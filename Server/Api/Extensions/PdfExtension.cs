using System;
namespace Api.Extensions
{
    public static class PdfExtension
    {
        public static String ToPdfSource(this byte[] pdf)
        {
            string result = "";
            if (pdf != null && pdf.Length != 0)
            {
                string base64 = Convert.ToBase64String(pdf);
                result = String.Format("data:application/pdf;base64,{0}", base64);
            }
            return result;
        }

    }
}
