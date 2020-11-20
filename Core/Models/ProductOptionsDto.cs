using System.Collections.Generic;

namespace Core.Models
{
    public class ProductOptionsDto
    {
        public ProductOptionsDto()
        {
            this.OptionValueNames = new List<string>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public List<string> OptionValueNames { get; set; }
    }
}