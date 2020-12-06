namespace Infrastructure.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Entities.OrderAggregate;
    using Core.Interfaces;
    using Core.Specifications;
    using Infrastructure.Data;

    public class OrderService : IOrderService
    {
        // private readonly IGenericRepository<Order> orderRepo;
        // private readonly IGenericRepository<DeliveryMethod> dmRepo;
        private readonly IUnitOfWork unitOfWork;
        private readonly IBasketRepository basketRepo;
        private readonly IProductRepository productRepo;
        private readonly IPaymentService paymentService;

        public OrderService(
            IUnitOfWork unitOfWork,
            IBasketRepository basketRepo,
            IProductRepository productRepo,
            IPaymentService paymentService)
        {
            // this.orderRepo = orderRepo;
            // this.dmRepo = dmRepo;
            this.unitOfWork = unitOfWork;
            this.basketRepo = basketRepo;
            this.productRepo = productRepo;
            this.paymentService = paymentService;
        }
        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            // get basket from the repo
            var basket = await this.basketRepo.GetBasketAsync(basketId);

            // get the items from the product repo
            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem =await this.unitOfWork.productRepository().GetProductByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            // get the delivery method from repo
            var deliveryMethod = await this.unitOfWork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);

            // calc subtotal
            var subtotal = items.Sum(item => item.Price * item.Quantity);

            // check if order exists
            var spec = new OrderByPaymentIntentIdSpecification(basket.PaymentIntentId);
            var existingOrder = await this.unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

            if (existingOrder != null)
            {
                this.unitOfWork.Repository<Order>().Delete(existingOrder);
                await this.paymentService.CreateOrUpdatePaymentIntent(basket.PaymentIntentId);
            }


            // create order
            var order = new Order(
                items, buyerEmail, shippingAddress, deliveryMethod, subtotal, basket.PaymentIntentId);
            this.unitOfWork.Repository<Order>().Add(order);

            // save to db
            var result = await this.unitOfWork.Complete();

            if (result <= 0) return null;

            // return order
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await this.unitOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndSortingSpecification(id, buyerEmail);
            return await this.unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndSortingSpecification(buyerEmail);
            return await this.unitOfWork.Repository<Order>().ListAsync(spec);
        }
    }
}