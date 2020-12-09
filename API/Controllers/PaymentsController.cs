namespace API.Controllers
{
    using System.IO;
    using System.Threading.Tasks;
    using API.Controllers.Errors;
    using Core.Entities;
    using Core.Interfaces;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Stripe;
    using Order = Core.Entities.OrderAggregate.Order;
    public class PaymentsController : BaseApiController
    {
        private readonly IPaymentService paymentService;
        private readonly string whSecret;
        private readonly ILogger<IPaymentService> logger;

        public PaymentsController(
            IPaymentService paymentService,
            ILogger<IPaymentService> logger,
            IConfiguration config)
        {
            this.logger = logger;
            this.paymentService = paymentService;
            this.whSecret = config.GetSection("StripeSettings:WhSecret").Value;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await this.paymentService.CreateOrUpdatePaymentIntent(basketId);

            if (basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));

            return basket;
        }

        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], this.whSecret);

            PaymentIntent intent;
            Order order;

            switch (stripeEvent.Type)
            {
                case "payment_intent.succeeded":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    this.logger.LogInformation("Payment Succeeded: ", intent.Id);
                    order  = await this.paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    this.logger.LogInformation("Order updated to payment received: ", order.Id);
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    this.logger.LogInformation("Payment Failed: ", intent.Id);
                    order = await this.paymentService.UpdateOrderPaymentFailed(intent.Id);
                    this.logger.LogInformation("Payment Failed: ", order.Id);
                    break;
            }

            return new EmptyResult();
        }
    }
}