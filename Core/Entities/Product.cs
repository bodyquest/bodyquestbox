namespace Core.Entities
{
    using System.Collections.Generic;
    using Core.Entities;
    public class Product : BaseEntity
    {
        public Product()
        {
            this.Product_ProductCategories = new HashSet<Product_ProductCategory>();
            this.SKUs = new HashSet<SKU>();
            this.ProductVariants = new HashSet<ProductVariant>();
            this.ProductVariantOptions = new HashSet<ProductVariantOption>();
        }

        public string Name { get; set; }

        public string ShortDescription { get; set; }

        public string LongDescription { get; set; }

        public decimal GrossWeight { get; set; }

        public decimal Price { get; set; }

        public string PictureUrl { get; set; }

        public virtual ICollection<Product_ProductCategory> Product_ProductCategories { get; set; }

        public virtual ICollection<SKU> SKUs { get; set; }

        public ICollection<ProductVariantOption> ProductVariantOptions { get; set; }

        public ICollection<ProductVariant> ProductVariants { get; set; }
    }
}