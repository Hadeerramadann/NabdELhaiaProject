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
    public class PostController : ApiController
    {
        [HttpGet]

        public IEnumerable<PostGetViewModel> GetPostsOfUser(string username)
        {
            IEnumerable<PostGetViewModel> posts;
            posts = PostService.GetPosts(username);
            return posts;
        }
        [HttpGet]

        public IEnumerable<PostGetViewModel> Get(string blood)
        {
            IEnumerable<PostGetViewModel> posts;
            posts = PostService.GetByBloodType(blood);
            return posts;
        }
        [HttpGet]

        public IEnumerable<PostGetViewModel> Get()
        {
            IEnumerable<PostGetViewModel> posts ;
             posts = PostService.Get();
            return posts;
        }
        [HttpGet]

        public PostGetViewModel GetPostId(int PostId) {
            return PostService.GetPost(PostId);
        }
        [HttpPost]

        public bool Post(PostCreateViewModel post)
        {
            //  Post  post = new Post() { UserName = "Esraa", Post_ID = 1, Address = "fayoum" };
              PostService.Create(post);
              return true;
        }
       
    }
}
