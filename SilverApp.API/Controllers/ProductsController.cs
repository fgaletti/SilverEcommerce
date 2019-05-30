using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SilverApp.API.Data;
using SilverApp.API.Models;

namespace SilverApp.API.Controllers
{
     [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {

         private readonly IProductRepository _repo;
        private readonly IMapper _mapper;
         public IConfiguration _config { get; }
        
          public ProductsController(IProductRepository repo, IMapper mapper, IConfiguration config)
        {
          _repo = repo;
          _mapper = mapper;
           _config = config; // get the token
        }

        [HttpPost("Create")]
      //public async Task<IActionResult> Signup([FromBody]UserForRegisterDto  userForRegisterDto) 
         public async Task<IActionResult> Create ([FromBody]Product product)
         {
             
             try {
                 var createdProduct = await  _repo.Create(product);
                   return StatusCode(201) ; // status for createdRoute
             }
             catch(Exception ex)
             {
                 return BadRequest(ex.Message); 
             }
         }

           [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _repo.GetProducts());
        }


    }
}