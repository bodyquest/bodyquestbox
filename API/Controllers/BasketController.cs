namespace API.Controllers
{
    using System.Threading.Tasks;
    using AutoMapper;
    using Core.Entities;
    using Core.Interfaces;
    using Core.Models;
    using Microsoft.AspNetCore.Mvc;

    public class BasketController : BaseApiController
    {
        public IBasketRepository basketRepo { get; }
        private readonly IMapper mapper;

        public BasketController(
            IBasketRepository basketRepo,
            IMapper mapper)
        {
            this.mapper = mapper;
            this.basketRepo = basketRepo;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket = await this.basketRepo.GetBasketAsync(id);

            return Ok(basket ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasketDto basket)
        {
            var customerBasket = this.mapper.Map<CustomerBasketDto, CustomerBasket>(basket);
            var updatedBasket = await this.basketRepo.UpdateBasketAsync(customerBasket);

            return Ok(updatedBasket);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id)
        {
            await this.basketRepo.DeleteBasketAsync(id);
        }
    }
}