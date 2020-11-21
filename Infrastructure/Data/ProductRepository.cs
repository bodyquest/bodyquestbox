namespace Infrastructure.Data
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using Core.Models;
    using Core.Specifications;
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
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
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

        public async Task<IReadOnlyList<ProductToReturnDto>> GetProductsAsync(ProductSpecParams specParams)
        {
            var products = new List<ProductToReturnDto>();
            if (!string.IsNullOrEmpty(specParams.Search))
            {
                //x.Name.ToLower().Contains(specParams.Search)
                if (specParams.Sort == "priceAsc")
                {
                    products =  await this.context.Products
                    .Where(p => p.Name.ToLower().Contains(specParams.Search))
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderBy(x => x.Price)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
                else if(specParams.Sort == "priceDesc")
                {
                    products =  await this.context.Products
                    .Where(p => p.Name.ToLower().Contains(specParams.Search))
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderByDescending(x => x.Price)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
                else
                {
                    products =  await this.context.Products
                    .Where(p => p.Name.ToLower().Contains(specParams.Search))
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderBy(x => x.Name)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
            }
            else
            {
                if (specParams.Sort == "priceAsc")
                {
                    products =  await this.context.Products
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderBy(x => x.Price)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
                else if(specParams.Sort == "priceDesc")
                {
                    products =  await this.context.Products
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderByDescending(x => x.Price)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
                else
                {
                    products =  await this.context.Products
                    .Select(p => new ProductToReturnDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Price = p.Price,
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
                    .OrderBy(x => x.Name)
                    .Skip(specParams.PageSize * (specParams.PageIndex - 1))
                    .Take(specParams.PageSize)
                    .ToListAsync();
                }
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