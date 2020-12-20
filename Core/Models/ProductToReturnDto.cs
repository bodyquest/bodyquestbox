using System.Collections.Generic;

namespace Core.Models
{
    public class ProductToReturnDto
    {

       public ProductToReturnDto()
       {
           this.Options = new HashSet<ProductOptionsDto>();
           this.OptionValues = new HashSet<ValueNameDto>();
           this.SKUs = new HashSet<SKUDto>();
       }
        public int Id { get; set; }
        public string Name { get; set; }

        public string ShortDescription { get; set; }

        public decimal GrossWeight { get; set; }

        public decimal Price { get; set; }

        public string PictureUrl { get; set; }

        public IEnumerable<ProductOptionsDto> Options { get; set; }

        public IEnumerable<ValueNameDto> OptionValues { get; set; }

        public IEnumerable<SKUDto> SKUs { get; set; }



        // public ICollection<ProductVariantOption> ProductVariantOptions { get; set; }

        // public ICollection<ProductVariant> ProductVariants { get; set; }
    }
}