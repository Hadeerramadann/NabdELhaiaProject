using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webapi.Models
{
    public class Comment
    {

        [Key]
        [Index]
        public int ID { get; set; }
        [ForeignKey("post")]
        public int Post_ID { get; set; }
        [Required]
        public string UserName { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        [JsonIgnore]
        public virtual Post post { get; set; }

    }
}