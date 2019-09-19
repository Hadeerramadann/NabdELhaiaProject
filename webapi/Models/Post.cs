using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webapi.Models
{
    public class Post
    {
        [Required]
        public string Text { get; set; }
        [Key , Index]
        public int Post_ID { get; set; }
        [ForeignKey("username")]
        public string UserName { get; set; }
        public DateTime Date { get; set; }
        public string BloodType { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        [JsonIgnore]
        public virtual User username { get; set; }
        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; }

    }
}