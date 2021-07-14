using System;
namespace Api.Data.Repositories
{
    public class MateriaalDataInitializer
    {

        private readonly MateriaalContext _dbContext;

        public MateriaalDataInitializer(MateriaalContext context)
        {
            _dbContext = context;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                //gebeurt al in de dbcontext
            }
        }
    }
}
