using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SilverApp.API.Data;
using SilverApp.API.Dtos;
using SilverApp.API.Models;

namespace SilverApp.API.Controllers
{
        [Route("api/[controller]")]

    public class UsersController : ControllerBase
    {
      private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repo, IMapper mapper)
      {
          _repo = repo;
          _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }


     [HttpPost("register")]
      //public async Task<IActionResult> Signup([FromBody]UserForRegisterDto  userForRegisterDto) 
       public async Task<IActionResult> Register([FromBody]UserForRegisterDTO userForRegisterDto)
      {
              // username equal to first Email that the user 
             userForRegisterDto.Username = userForRegisterDto.Email.ToLower();
             userForRegisterDto.Email = userForRegisterDto.Email.ToLower();

             if (await _repo.UserExists(userForRegisterDto.Username.ToLower()))
                return BadRequest("user already exists");

             /* var userToCreate = new User 
             {
                 Username = username
             };*/

             var userToCreate = _mapper.Map<User>(userForRegisterDto);


             var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);
             return StatusCode(201) ; // status for createdRoute
      }

    }
}