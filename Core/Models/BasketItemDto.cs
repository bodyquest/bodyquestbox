namespace Core.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        [Range(0.10, 10000.00, ErrorMessage = "Price must be greater than zero")]
        public decimal Price { get; set; }

        [Required]
        [Range(1.0, 10.00, ErrorMessage = "Quantity must be between 1 and 10")]
        public int Quantity { get; set; }

        [Required]
        public string PictureUrl { get; set; }
    }
}