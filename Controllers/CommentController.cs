using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi.services;
using webapi.ViewModels;

namespace webapi.Controllers
{
    public class CommentController : ApiController
    {
        [HttpGet]
        public IEnumerable<CommentGetViewModel> Get(int id)
        {
            IEnumerable<CommentGetViewModel> comments;
            comments = CommentService.GetById(id);
            return comments;
        }
        [HttpGet]
        public IEnumerable<CommentGetViewModel> Get()
        {
            IEnumerable<CommentGetViewModel> comments;
            comments = CommentService.Get();
            return comments;
        }
        //public IEnumerable<CommentGetViewModel> GetCommentes(string username)
        //{
        //    IEnumerable<CommentGetViewModel> comments;
        //    comments = CommentService.GetComment(username);
        //    return comments;
        //}
        [HttpPost]
        public bool Post(CommentCreateViewModel Comment)
        {
            //  Post  post = new Post() { UserName = "Esraa", Post_ID = 1, Address = "fayoum" };
            CommentService.Create(Comment);
            return true;
        }

    }
}
