using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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
         public IConfiguration _config { get; }


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

       [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto  userForLoginDto)
        {

                var userFromRepo = await _repo.Login(userForLoginDto.UserName.ToLower(), userForLoginDto.Password);

                if (userFromRepo == null)
                    return Unauthorized();
                 
                //create token
                var claims = new[]
                {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),  
                new Claim(ClaimTypes.Name, userFromRepo.Username)
                };

                // add tokens
                //config.GetSection("Appsettings:Token") => appsettings.json
                var key  = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Appsettings:Token").Value));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = creds
                };
                                    
                var tokenHandler = new JwtSecurityTokenHandler();

                var token = tokenHandler.CreateToken(tokenDescriptor);
                
                //   we dont want to use userFromRepo becase has passwords so
                // we use UserForListDto better
                var user = _mapper.Map<UserForListDto>(userFromRepo);
                //var user = _mapper.Map<UserForListDto>(_repo.GetUser(userFromRepo.Id);
                // var user = await _repo.GetUser(id);

                return Ok(
                    new { token =  tokenHandler.WriteToken(token), 
                        user //  add new parameter
                    }
                );
        }

    }
}