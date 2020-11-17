using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ProductCategory> GetCategoryByIdAsync(int id);
        Task<IReadOnlyList<ProductCategory>> GetCategoriesAsync();
    }
}