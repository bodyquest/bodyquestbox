using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository repo;
        public CategoriesController(ICategoryRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductCategory>>> GetCategoriesAsync()
        {
            var categories = await this.repo
                .GetCategoriesAsync();

            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductCategory>> GetCategoryByIdAsync(int id)
        {

            return await this.repo.GetCategoryByIdAsync(id);
        }
    }
}