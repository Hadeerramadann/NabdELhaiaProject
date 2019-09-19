using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using webapi.Models;

namespace webapi.ViewModels
{
    public class PostCreateViewModel
    {

     //   public int Post_ID { get; set; }
        [ForeignKey("username")]
        public string UserName { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string BloodType { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        [JsonIgnore]
        public virtual User username { get; set; }
     

    }
}