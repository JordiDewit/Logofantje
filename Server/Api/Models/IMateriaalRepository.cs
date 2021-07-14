using System;
using System.Collections.Generic;

namespace Api.Models
{
    public interface IMateriaalRepository
    {
        Therapiemateriaal GetBy(int id);
        bool TryGetMateriaal(int id, out Therapiemateriaal mat);
        IEnumerable<Therapiemateriaal> GetAll();
        void Add(Therapiemateriaal mat);
        void Delete(Therapiemateriaal mat);
        void Update(Therapiemateriaal mat);
        void SaveChanges();
    }
}
