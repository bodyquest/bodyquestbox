namespace Infrastructure.Data
{
    using System;
    using System.Text.Json;
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Interfaces;
    using StackExchange.Redis;

    public class BasketRepository : IBasketRepository
    {
        private readonly IDatabase database;

        public BasketRepository(IConnectionMultiplexer redis)
        {
            this.database = redis.GetDatabase();
        }
        
        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            var data = await this.database.StringGetAsync(basketId);

            var result = data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data);
            return result;
        }

        public async Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket)
        {
            var created = await this.database
                .StringSetAsync(basket.Id, JsonSerializer.Serialize(basket), TimeSpan.FromDays(30));

            if (!created) return null;

            return await GetBasketAsync(basket.Id);
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await this.database.KeyDeleteAsync(basketId);
        }
    }
}