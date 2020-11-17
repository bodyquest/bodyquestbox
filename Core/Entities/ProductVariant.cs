namespace Core.Entities
{
    public class ProductVariant : BaseEntity
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int OptionId { get; set; }
        public Option Option { get; set; }
    }
}