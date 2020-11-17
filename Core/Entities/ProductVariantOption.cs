namespace Core.Entities
{
    public class ProductVariantOption : BaseEntity
    {
        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int OptionValueId { get; set; }

        public OptionValue OptionValue { get; set; }
    }
}