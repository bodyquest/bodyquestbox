namespace Core.Entities
{
    using System.Collections.Generic;
    using Core.Entities;
    public class Product : BaseEntity
    {
        public Product()
        {
            this.Product_ProductCategories = new HashSet<Product_ProductCategory>();
        }

        public string Name { get; set; }

        public string ShortDescription { get; set; }

        public string LongDescription { get; set; }

        public decimal GrossWeight { get; set; }

        public decimal Price { get; set; }

        public string PictureUrl { get; set; }

        public virtual ICollection<Product_ProductCategory> Product_ProductCategories { get; set; }
    }
}