namespace Core.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Models;

    public interface IProductRepository
    {
        Task<ProductToReturnDto> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductsAsync(string sort);
        Task<IReadOnlyList<SKU>> GetSKUsAsync();
        Task<IReadOnlyList<ProductVariantOption>> GetProductVariantOptionsAsync();

    }
}