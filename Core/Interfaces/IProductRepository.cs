namespace Core.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Models;
    using Core.Specifications;

    public interface IProductRepository
    {
        Task<ProductToReturnDto> GetProductByIdAsync(int id);
        Task<IReadOnlyList<ProductToReturnDto>> GetProductsAsync(ProductSpecParams specParams);
        Task<IReadOnlyList<SKU>> GetSKUsAsync();
        Task<IReadOnlyList<ProductVariantOption>> GetProductVariantOptionsAsync();

    }
}