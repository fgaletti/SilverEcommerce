using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using SilverApp.API.Data;
using SilverApp.API.Models;

namespace SilverApp.API.Controllers
{
    [Authorize]
    [Route("api/products/{productId}/productimages")]
    [ApiController]  
      public class ProductImagesController : ControllerBase
    {
        private IProductRepository _repo;

        public ProductImagesController(IHostingEnvironment environment, IProductRepository repo)
        {
             _repo = repo;
        }

        [HttpGet("{id}", Name = "GetImage")] 
        public async Task<IActionResult> GetImage(int id)
        {
           var imageFromRepo = await _repo.GetImage(id);   

           return Ok(imageFromRepo);
        }

        
        

          [HttpPost]
        public async Task<IActionResult> AddImageForProduct ( int productId,
            [FromForm] ProductImage productImage)
            {

             //check that the user that is attempting to update the profile matches
             // the token that the server is receiveing 
            
            var product = await _repo.GetProduct(productId); 

           product.ProductImages.Add(productImage);

            if (await _repo.SaveAll())
            {

                // it should be return CreatedAtRoute
                // return Ok();
                 return CreatedAtRoute("GetImage", new { id = productImage.Id}); // 201
            }    

            return BadRequest("Could not add the image");
        }
    }
}