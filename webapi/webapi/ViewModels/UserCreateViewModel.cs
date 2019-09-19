using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace webapi.ViewModels
{
    public class UserCreateViewModel
    {

        [Key]
        public string UserName { get; set; }

        [Required ,MaxLength(30)]
        public string Name { get; set; }

        [MaxLength(30)]
        public string Address { get; set; }

        [Required ,MaxLength(3)]
        public string BloodType { get; set; }
        [Required]
        public string Contact { get; set; }
        public string Image { get; set; }

        /*  public long PhoneNumber { get; set; }
          [EmailAddress,MaxLength(30)]
          public string Email { get; set; }*/

        [Required]
        public string Password { get; set; }

    }
}