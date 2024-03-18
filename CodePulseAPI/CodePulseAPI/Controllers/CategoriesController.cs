using CodePulseAPI.Models.Domain;
using CodePulseAPI.Models.DTO;
using CodePulseAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoriesController(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryRequestDTO requestDTO)
        {
            // Map DTO to Domain Model
            var category = new Category
            {
                Name = requestDTO.Name,
                UrlHandle = requestDTO.UrlHandle,
            };

            category = await categoryRepository.CreateAsync(category);

            // Map Domain to DTO

            var response = new CategoryDTO
            {
                Id = category.Id,
                Name = category.Name,
                UrlHandle = category.UrlHandle,
            };

            return Ok(response);
        }

        [HttpGet] 
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await categoryRepository.GetAllAsync();

            // Map Domain to DTO
            var response = new List<CategoryDTO>();
            foreach (var category in categories)
            {
                response.Add(new CategoryDTO 
                { 
                    Id = category.Id, 
                    Name = category.Name, 
                    UrlHandle = category.UrlHandle 
                });
            }
            return Ok(response);
        }
    }
}
