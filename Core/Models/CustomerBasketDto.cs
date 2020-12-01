namespace Core.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; }

        public ICollection<BasketItemDto> Items { get; set; } = new HashSet<BasketItemDto>();
    }
}