namespace Core.Specifications
{
    using Core.Entities;
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(
            ProductSpecParams productParams)
            : base(x => 
                (string.IsNullOrEmpty(
                    productParams.Search)
                    || x.Name.ToLower().Contains(productParams.Search))
            )
        {

        }
    }
}