using CodePulseAPI.Models.Domain;

namespace CodePulseAPI.Repositories
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
        Task<IEnumerable<Category>> GetAllAsync();
    }
}
