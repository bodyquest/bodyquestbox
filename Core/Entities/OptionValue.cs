namespace Core.Entities
{
    public class OptionValue : BaseEntity
    {
        public string ValueName { get; set; }
        
        public int OptionId { get; set; }

        public Option Option { get; set; }
    }
}