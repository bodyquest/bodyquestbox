namespace Core.Entities
{
    public class Product_ProductCategory
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int ProductCategoryId { get; set; }
        public ProductCategory ProductCategory { get; set; }
    }
}