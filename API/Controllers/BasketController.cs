namespace API.Controllers
{
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    public class BasketController : BaseApiController
    {
        public IBasketRepository basketRepo { get; }

        public BasketController(IBasketRepository basketRepo)
        {
            this.basketRepo = basketRepo;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket = await this.basketRepo.GetBasketAsync(id);

            return Ok(basket ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasket basket)
        {
            var updatedBasket = await this.basketRepo.UpdateBasketAsync(basket);

            return Ok(updatedBasket);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id)
        {
            await this.basketRepo.DeleteBasketAsync(id);
        }
    }
}