namespace Core.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; }

        public ICollection<BasketItemDto> Items { get; set; } = new HashSet<BasketItemDto>();

        public int? DeliveryMethodId { get; set; }

        public string ClientSecret { get; set; }
        
        public string PaymentIntentId { get; set; }

        public decimal ShippingPrice { get; set; }
    }
}