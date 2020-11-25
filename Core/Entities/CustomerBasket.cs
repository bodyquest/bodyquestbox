namespace Core.Entities
{
    using System;
    using System.Collections.Generic;

    public class CustomerBasket
    {
        public CustomerBasket() {}

        public CustomerBasket(string id)
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public ICollection<BasketItem> Items { get; set; } = new HashSet<BasketItem>();
    }
}