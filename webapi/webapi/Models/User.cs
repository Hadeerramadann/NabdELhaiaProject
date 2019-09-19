using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace webapi.Models
{

    public class User
    {
        [Key]
        public string UserName { get; set; }

        // public int ID { get; set; }
        [Required]
        public string Name{ get; set; }

        public string Address { get; set; }

        [Required]
        public string BloodType { get; set; }

       // public long PhoneNumber { get; set; }
        [Required]
        public string Contact { get; set; }
        public string Image { get; set; }

        // public string Email { get; set; }
         
         [Required]
         public string Password { get; set; }

        [JsonIgnore]
        public virtual ICollection<Post> Posts { get; set; }






    }
}