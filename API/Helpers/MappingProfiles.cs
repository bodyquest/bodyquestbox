namespace API.Helpers
{
    using AutoMapper;
    using Core.Entities;
    using Core.Entities.Identity;
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

            CreateMap<Address, AddressDto>().ReverseMap();
        }
    }
} 