namespace API.Extensions
{
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using Core.Entities.Identity;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;

    public static class UserManagerExtensions
    {
        public static async Task<User> FindUserByClaimsPrincipalWithAddressAsync(this UserManager<User> input, ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            return await input.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == email);
        }

        public static async Task<User> FindByEmailFromClaimsPrincipal(this UserManager<User> input, ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            return await input.Users.SingleOrDefaultAsync(x => x.Email == email);
        }
    }
}