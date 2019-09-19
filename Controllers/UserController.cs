using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi.Models;
using webapi.services;
using webapi.ViewModels;

namespace webapi.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public bool Check( string Password, string username)
        {
            bool user;
            user = UserService.check_user(username, Password);
            return user;
        }
        public UserGetViewModel Get(string username)
        {
            UserGetViewModel user;
            user = UserService.GetById(username);
                 return user;
        }
        public IEnumerable<UserGetViewModel> Get()
        {
            IEnumerable<UserGetViewModel> users;
            users = UserService.Get();
            return users;
        }
        public bool Post(UserCreateViewModel user) {

         //   user = new User() { UserName = "Esraa", BloodType = "o", Password = "sss", Address = "fayoum", Name = "Esraa Ryad" };
            return UserService.Create(user);
        }
    }
}
