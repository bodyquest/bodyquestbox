using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoriesController : BaseApiController
    {
        private readonly ICategoryRepository repo;
        public CategoriesController(ICategoryRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet("maincategories")]
        public async Task<ActionResult<IReadOnlyList<MainCategoryDto>>> GetMainCategoriesAsync()
        {
            var categories = await this.repo
                .GetMainCategoriesAsync();

            return Ok(categories);
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