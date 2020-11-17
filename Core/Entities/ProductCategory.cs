using System.Collections.Generic;

namespace Core.Entities
{
    public class ProductCategory : BaseEntity
    {
        public ProductCategory()
        {
            this.Children = new HashSet<ProductCategory>();
            this.Product_ProductCategories = new HashSet<Product_ProductCategory>();
        }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public int? ParentId { get; set; }
        public virtual ProductCategory Parent { get; set; }

        public virtual ICollection<ProductCategory> Children { get; set; }
        public virtual ICollection<Product_ProductCategory> Product_ProductCategories { get; set; }
    }
}