namespace Core.Models
{
    public class SKUDto
    {
        public int Id { get; set; }
        
        public string Name { get; set; }

        public decimal Price { get; set; }

        public decimal Weight { get; set; }

        public int StockQty { get; set; }
    }
}