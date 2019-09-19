using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using webapi.Models;
using webapi.ViewModels;

namespace webapi.services
{
    public class UserService
    {
        public static bool check_user(string username, string Paswword) {
           // to ckeck in encrypted password
            Paswword = SecurityHelper.Encrypt(Paswword);
            using (Entities db = new Entities())
            {
                User user = db.Users.Where(x => x.UserName == username && x.Password == Paswword).FirstOrDefault();
                if (user != null )
                    return true;
                return false;

            }
            return false;

        }
        public static bool Create(UserCreateViewModel user)
        {
            User newuser = new User();
            newuser.UserName = user.UserName;
            newuser.Name = user.Name;
            newuser.Contact = user.Contact;
            newuser.Address = user.Address;
            newuser.BloodType = user.BloodType;
            newuser.Image = user.Image;
            newuser.Password = user.Password;
            // to encrypte password
            newuser.Password = SecurityHelper.Encrypt(newuser.Password);
       
            using (Entities db = new Entities())
            {
                db.Users.Add(newuser);
                db.SaveChanges();
                return true;
            }
            return false;
        }
    
         public static UserGetViewModel GetById(string username)
        {
            using (Entities db = new Entities())
            {
               UserGetViewModel userView = db.Users.Select(x => new UserGetViewModel { Name = x.Name, BloodType = x.BloodType, Address = x.Address, Contact = x.Contact,   UserName = x.UserName , Image = x.Image }).Where(x => x.UserName == username).FirstOrDefault();
                return userView;
            }
        }
        public static IEnumerable<UserGetViewModel> Get() {
             using (Entities db = new Entities())
            {
                IEnumerable<UserGetViewModel> usersView = db.Users.Select(x => new UserGetViewModel { Name = x.Name, BloodType = x.BloodType, Address = x.Address, Contact = x.Contact, UserName = x.UserName , Image = x.Image }).ToList();
                return usersView;
            }
        }

    
    }
}