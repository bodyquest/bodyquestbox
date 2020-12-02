namespace API.Helpers
{
    using AutoMapper;
    using Core.Entities;
    using Core.Entities.Identity;
    using Core.Entities.OrderAggregate;
    using Core.Models;

    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.Options,
                           o => o.MapFrom(s => s.ProductVariants))
                .ForMember(d => d.OptionValues,
                           o => o.MapFrom(s => s.ProductVariantOptions))
                .ForMember(d => d.PictureUrl,
                           o => o.MapFrom<UrlResolver>());
                //resolving local static file to full URL

            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();

            CreateMap<CustomerBasketDto, CustomerBasket>();
            CreateMap<BasketItemDto, BasketItem>();

            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));

            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.PictureUrl, o => o.MapFrom(s => s.ItemOrdered.PictureUrl));
        }
    }
} 