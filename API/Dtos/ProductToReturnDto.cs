using System.Collections.Generic;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string ShortDescription { get; set; }

        public decimal GrossWeight { get; set; }

        public decimal Price { get; set; }

        public string PictureUrl { get; set; }

        public IEnumerable<string> ValueOptionNames { get; set; }

        // public ICollection<ProductVariantOption> ProductVariantOptions { get; set; }

        // public ICollection<ProductVariant> ProductVariants { get; set; }
    }
}