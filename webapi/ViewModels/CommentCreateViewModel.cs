using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapi.ViewModels
{
    public class CommentCreateViewModel
    {
        public string UserName { get; set; }
        public int Post_ID { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }

    }
}