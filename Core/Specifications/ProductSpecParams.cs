namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 50;
        public int PageIndex { get; set; } = 1;

        private int pageSize = 3;
        public int PageSize
        {
            get => pageSize;
            set => pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
        
        public string Sort { get; set; }

        private string search;
        public string Search 
        {
             get => search;
             set => search = value.ToLower();
        }

    }
}