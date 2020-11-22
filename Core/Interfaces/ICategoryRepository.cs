using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Models;

namespace Core.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ProductCategory> GetCategoryByIdAsync(int id);

        Task<IReadOnlyList<MainCategoryDto>> GetMainCategoriesAsync();

        Task<IReadOnlyList<ProductCategory>> GetCategoriesAsync();
    }
}