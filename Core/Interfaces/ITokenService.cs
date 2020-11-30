namespace Core.Interfaces
{
    using Core.Entities.Identity;
    public interface ITokenService
    {
         string CreateToken(User user);
    }
}