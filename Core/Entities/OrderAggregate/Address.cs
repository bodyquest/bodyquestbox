namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }
        public Address(string firstName, string lastName, string street, string city, string postCode)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
            City = city;
            PostCode = postCode;
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Street { get; set; }

        public string City { get; set; }

        public string PostCode { get; set; }

    }
}