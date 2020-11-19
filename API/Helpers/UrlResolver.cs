using AutoMapper;
using Core.Entities;
using Core.Models;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class UrlResolver : IValueResolver<Product, ProductToReturnDto, string>
    {
        private readonly IConfiguration config;
        public UrlResolver(IConfiguration config)
        {
            this.config = config;

        }

        public string Resolve(Product source, ProductToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return config["ApiUrl"] + source.PictureUrl;
            }

            return null;
        }
    }
}