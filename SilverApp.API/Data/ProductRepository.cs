using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SilverApp.API.Models;

namespace SilverApp.API.Data
{
    public class ProductRepository : IProductRepository
    {
         private readonly DataContext _context;

        public ProductRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Product> Create(Product product)
        {   
            await _context.Products.AddAsync(product); // need to add await
            await _context.SaveChangesAsync(); // need to add await
            return product;
           
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            // in order to add Include we need to add : Microsoft.EntityFrameworkCore
            return await _context.Products.ToListAsync();
        }
    }
}