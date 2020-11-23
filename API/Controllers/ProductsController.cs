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
    using API.Controllers.Errors;
    using Microsoft.AspNetCore.Http;
    using API.Helpers;

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
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProductsAsync(
            [FromQuery] ProductSpecParams productParams)
        {
            var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs(productParams);
            var countSpec = new ProductWithFiltersForCountSpecification(productParams);

            // var totalItems = await this.productsRepo.CountAsync(countSpec);

            var products = await this.simpleRepo.GetProductsAsync(productParams);
            var totalItems = await this.simpleRepo.GetProductCountAsync();
            
            return Ok(new Pagination<ProductToReturnDto>(
                productParams.PageIndex,
                productParams.PageSize,
                totalItems, products));
        }

        [HttpGet("{id}")] 
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProductAsync(int id)
        {
            //var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs(id);

            var product = await this.simpleRepo.GetProductByIdAsync(id);

            // var mappedProduct = mapper.Map<Product, ProductToReturnDto>(product);
            if (product == null)
            { 
                return NotFound(new ApiResponse(404));
            }
            return product;
            // return await this.productsRepo.GetEntityWithSpec(spec);
        }

        [HttpGet("skus")]
        public async Task<ActionResult<List<SKU>>> GetProductSkusAsync()
        {
            //var spec = new ProductsWithVariantsAndVariantOptionsAndSKUs();
            // var skus = await this.skusRepo.ListAsync(spec);

            return Ok();//skus);
        }
    }
}