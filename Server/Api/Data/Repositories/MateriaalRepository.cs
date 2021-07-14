using System;
using System.Collections.Generic;
using System.Linq;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Repositories
{
    public class MateriaalRepository : IMateriaalRepository
    {
        #region Fields
        private readonly MateriaalContext _context;
        private readonly DbSet<Therapiemateriaal> _materialen;
        #endregion

        #region constructor
        public MateriaalRepository(MateriaalContext dbContext)
        {
            _context = dbContext;
            _materialen = dbContext.Materialen;
        }
        #endregion

        public void Add(Therapiemateriaal mat)
        {
            _materialen.Add(mat);
        }

        public void Delete(Therapiemateriaal mat)
        {
            _materialen.Remove(mat);
        }

        public IEnumerable<Therapiemateriaal> GetAll()
        {
            return _materialen.ToList();
        }

        public Therapiemateriaal GetBy(int id)
        {
            return _materialen.SingleOrDefault(m => m.Id == id);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public bool TryGetMateriaal(int id, out Therapiemateriaal mat)
        {
            mat = _context.Materialen.FirstOrDefault(m => m.Id == id);
            return mat != null;
        }

        public void Update(Therapiemateriaal mat)
        {
            _context.Update(mat);
        }
    }
}
