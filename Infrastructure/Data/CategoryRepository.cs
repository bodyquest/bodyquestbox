namespace Infrastructure.Data
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using Core.Models;
    using Microsoft.EntityFrameworkCore;

    public class CategoryRepository : ICategoryRepository
    {
        private readonly StoreContext context;
        
        public CategoryRepository(StoreContext context)
        {
            this.context = context;

        }

        public async Task<ProductCategory> GetCategoryByIdAsync(int id)
        {
            return await this.context.ProductCategories
                .FirstOrDefaultAsync(pc => pc.Id == id);
        }

        public async Task<IReadOnlyList<MainCategoryDto>> GetMainCategoriesAsync()
        {
            var result = await this.context.ProductCategories
                .Select(c => new MainCategoryDto
                {
                    Id = c.Id,
                    Name = c.Name
                })
                .Take(10)
                .ToListAsync();
            
            return result;
        }

        public async Task<IReadOnlyList<ProductCategory>> GetCategoriesAsync()
        {
            var result = await this.context.ProductCategories
                .Where(pc => pc.ParentId == null)
                .Include(pc => pc.Children)
                // .Where(c => c.Children.Any(x => x.ParentId == c.Id))
                .ToListAsync();
            
            return result;
        }
    }
}