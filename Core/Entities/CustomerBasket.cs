namespace Core.Entities
{
    using System;
    using System.Collections.Generic;

    public class CustomerBasket
    {
        public CustomerBasket() {}

        public CustomerBasket(string id)
        {
            this.Id = id;
        }

        public string Id { get; set; }

        public ICollection<BasketItem> Items { get; set; } = new HashSet<BasketItem>();

        public int? DeliveryMethodId { get; set; }

        public string ClientSecret { get; set; }
        
        public string PaymentIntentId { get; set; }

        public decimal ShippingPrice { get; set; }
    }
}