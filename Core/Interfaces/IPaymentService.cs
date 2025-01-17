namespace Core.Interfaces
{
    using System.Threading.Tasks;
    using Core.Entities;
    using Core.Entities.OrderAggregate;

    public interface IPaymentService
    {
         Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);

         Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId);

        Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);
    }
}