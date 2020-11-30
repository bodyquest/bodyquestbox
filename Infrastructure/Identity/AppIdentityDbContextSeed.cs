using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    DisplayName = "Dari",
                    Email = "dotnetdari@gmail.com",
                    UserName = "bodyquest",
                    Address = new Address
                    {
                        FirstName = "Darin",
                        LastName = "Rusev",
                        Street = "Vasil Levski 15",
                        City = "d.Mitropoliq",
                        PostCode = "5855",
                    }
                };

                await userManager.CreateAsync(user, "Parola1!");
            }
        }
    }
}