namespace Core.Entities
{
    public class SKU : BaseEntity
    {
        public string SkuName { get; set; }

        public decimal Price { get; set; }

        public int StockQty { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}