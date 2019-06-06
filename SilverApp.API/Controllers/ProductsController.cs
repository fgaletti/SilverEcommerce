using System;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
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

         private IHostingEnvironment _hostingEnvironment;
        
          public ProductsController(IHostingEnvironment environment, IProductRepository repo, IMapper mapper, IConfiguration config)
        {
          _repo = repo;
          _mapper = mapper;
           _config = config; // get the token
            _hostingEnvironment = environment;
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

        [HttpPost("AddImageProduct")]
        public async Task<IActionResult> AddImageProduct ( string sesionId ,
            [FromForm]IFormFile file)
            {
                // string sesionId 

                var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
                if (file.Length > 0) {
                    var filePath = Path.Combine(uploads, file.FileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create)) {
                        await file.CopyToAsync(fileStream);
                    }
                }
              // return CreatedAtRoute("GetPhoto", new { id = photo.Id}, photoToReturn); // 201
                string imageName = Request.Host.Value + "/uploads/" + file.FileName;

                return Ok(imageName) ;
            }


    }
}