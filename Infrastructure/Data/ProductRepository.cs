namespace Infrastructure.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext context;
        public ProductRepository(StoreContext context)
        {
            this.context = context;

        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await this.context.Products
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await this.context.Products
            .ToListAsync();
        }
    }
}