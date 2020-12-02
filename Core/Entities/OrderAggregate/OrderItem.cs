namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered itemOrdered, decimal price, int quantity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public decimal Price { get; set; }

        public int Quantity { get; set; }
        
        public ProductItemOrdered ItemOrdered { get; set; }
    }
}