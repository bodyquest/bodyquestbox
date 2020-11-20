namespace Infrastructure.Data
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using Core.Models;
    using Microsoft.EntityFrameworkCore;

    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext context;
        public ProductRepository(StoreContext context)
        {
            this.context = context;

        }

        public async Task<ProductToReturnDto> GetProductByIdAsync(int id)
        {
            var product =  await this.context.Products
                .Where(p => p.Id == id)
                .Select(p => new ProductToReturnDto
                {
                    Name = p.Name,
                    ShortDescription = p.ShortDescription,
                    PictureUrl = p.PictureUrl,
                    Options = p.ProductVariants
                        .Select(pv => new ProductOptionsDto
                        {
                            Id = pv.Option.Id,
                            Name = pv.Option.Name,
                        }),
                    OptionValues = p.ProductVariantOptions
                        .Select(pvo => new ValueNameDto
                        {
                            OptionId = pvo.OptionValue.Option.Id,
                            ValueName = pvo.OptionValue.ValueName
                        })
                })
                .FirstOrDefaultAsync();
            
            foreach (var option in product.Options)
            {
                foreach (var value in product.OptionValues)
                {
                    if (option.Id == value.OptionId)
                    {
                        option.OptionValueNames.Add(value.ValueName);
                    }
                }
            }

            return product;
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync(string sort)
        {
            var products = await this.context.Products.ToListAsync();

            if (sort == "priceAsc")
            {
                products.OrderBy(x => x.Price);
            }
            else if(sort == "priceDesc")
            {
                products.OrderByDescending(x => x.Price);
            }
            else
            {
                products.OrderBy(x => x.Name);
            }

            return products;
        }

        public async Task<IReadOnlyList<ProductVariantOption>> GetProductVariantOptionsAsync()
        {
            return await this.context.ProductVariantOptions.ToListAsync();
        }

        public async Task<IReadOnlyList<SKU>> GetSKUsAsync()
        {
            return await this.context.SKUs.ToListAsync();
        }
    }
}