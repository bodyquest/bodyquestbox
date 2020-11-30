namespace Core.Entities.Identity
{
    public class Address
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Street { get; set; }

        public string City { get; set; }

        public string PostCode { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}