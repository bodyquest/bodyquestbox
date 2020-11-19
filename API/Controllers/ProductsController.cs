namespace API.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Core.Entities;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Infrastructure.Data;
    using Core.Interfaces;
    using Core.Specifications;
    using Core.Models;
    using AutoMapper;

    public class ProductsController : BaseApiController
    {
        private readonly IProductRepository simpleRepo;
        private readonly IGenericRepository<Product> productsRepo;
        private readonly IGenericRepository<SKU> skusRepo;
        private readonly IGenericRepository<ProductVariant> productVariantsRepo;
        private readonly IGenericRepository<ProductVariantOption> productVariantOptionsRepo;
        private readonly IMapper mapper;

        public ProductsController(
            IProductRepository simpleRepo,
            IGenericRepository<Product> productsRepo,
            IGenericRepository<SKU> skusRepo,
            IGenericRepository<ProductVariant> productVariantsRepo,
            IGenericRepository<ProductVariantOption> productVariantOptionsRepo,
            IMapper mapper)
        {
            this.simpleRepo = simpleRepo;
            this.productsRepo = productsRepo;
            this.skusRepo = skusRepo;
            this.productVariantsRepo = productVariantsRepo;
            this.productVariantOptionsRepo = productVariantOptionsRepo;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProductsAsync()
        {
            var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs();
            var products = await this.productsRepo.ListAsync(spec);

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> GetProductAsync(int id)
        {
            var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs(id);

            var product = await this.simpleRepo.GetProductByIdAsync(id);

            // var mappedProduct = mapper.Map<Product, ProductToReturnDto>(product);

            return product;
            // return await this.productsRepo.GetEntityWithSpec(spec);
        }

        [HttpGet("skus")]
        public async Task<ActionResult<List<SKU>>> GetProductSkusAsync()
        {
            var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs();
            // var skus = await this.skusRepo.ListAsync(spec);

            return Ok();//skus);
        }
    }
}