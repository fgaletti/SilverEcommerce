using System.Collections.Generic;
using System.Threading.Tasks;
using SilverApp.API.Models;

namespace SilverApp.API.Data
{
    public interface IProductRepository
    {
         Task<Product> Create(Product product);
        Task<IEnumerable<Product>> GetProducts();
    }
}