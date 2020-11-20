namespace Core.Specifications
{
    using System;
    using System.Linq.Expressions;
    using Core.Entities;

    public class ProductsWithVariantsAndVariantOptionsAndSKUs : BaseSpecification<Product>
    {
        public ProductsWithVariantsAndVariantOptionsAndSKUs(ProductSpecParams productParams)
            : base(x => 
                (string.IsNullOrEmpty(
                    productParams.Search)
                    || x.Name.ToLower().Contains(productParams.Search))
            )
        {
            AddInclude(x => x.SKUs);
            AddInclude(x => x.ProductVariants);
            AddInclude(x => x.ProductVariantOptions);
            AddOrderBy(x => x.Name);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);

            if (!string.IsNullOrEmpty(productParams.Sort))
            {
                switch(productParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                }
            }
        }

        public ProductsWithVariantsAndVariantOptionsAndSKUs(int id) 
        : base(x => x.Id == id)
        {
            AddInclude(x => x.SKUs);
            AddInclude(x => x.ProductVariants);
            AddInclude(x => x.ProductVariantOptions);
        }
    }
}