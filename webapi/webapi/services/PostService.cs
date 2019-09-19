using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using webapi.Models;
using webapi.ViewModels;

namespace webapi.services
{
    public class PostService
    {

        public static bool Create(PostCreateViewModel post)
        {
            IEnumerable<User> users;
            //  User newuser = new User();
            Post newPost = new Post();
            newPost.Address = post.Address;
            newPost.BloodType = post.BloodType;
            newPost.City = post.City;
            newPost.Date = post.Date;
            newPost.Text = post.Text;
            newPost.UserName = post.UserName;
            
            using (Entities db = new Entities())
            {
                db.Posts.Add(newPost);
                db.SaveChanges();
                users = db.Users.Where(x => x.BloodType == newPost.BloodType && x.Contact.Contains("@") == true).ToList();
                if (users != null)
                {
                    foreach (var item in users)
                    {
                        EmailService.SendEmail("السلام عليكم ورحمه الله وبركاته \n نود اخباركم بمعاد التبرع \n  " + newPost.Date + " ومكان التبرع \n"+ newPost.Address +"\n"+" بمدينه"+ newPost.City+"وجزاكم الله كل خير <3", item.Contact);
                    }
                }
                return true;
            }
           

            return false;
        }
        public static IEnumerable<PostGetViewModel> GetPosts(string username)
        {
            using (Entities db = new Entities())
            {
                IEnumerable<PostGetViewModel> posts = db.Posts.Select(x => new PostGetViewModel { Post_ID = x.Post_ID, Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType, Comments = x.Comments.Select(comment => new CommentGetViewModel { Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where(comment => comment.Post_ID == x.Post_ID).ToList()  }).Where(x =>x.UserName == username).ToList();
                // CommentService.GetById(5).ToList();
                //  IEnumerable<PostGetViewModel> posts = db.Posts.Include(x =>) //
                //.Select(x => new PostGetViewModel { Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType /*, Comments  = CommentService.GetById(5).ToList()*/ }).ToList();

                return posts;
                //return db.Posts.ToList();

            }
        }
        public static IEnumerable<PostGetViewModel> Get()
        {
            using (Entities db = new Entities())
            {
              IEnumerable<PostGetViewModel> posts = db.Posts.Select(x => new PostGetViewModel { Post_ID = x.Post_ID ,Text = x.Text , UserName = x.UserName , Date = x.Date , City= x.City , Address = x.Address , BloodType = x.BloodType , Comments  = x.Comments.Select(  comment => new CommentGetViewModel { Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date,  UserName = comment.UserName }).Where(comment => comment.Post_ID == x.Post_ID).ToList() }).ToList();
               // CommentService.GetById(5).ToList();
              //  IEnumerable<PostGetViewModel> posts = db.Posts.Include(x =>) //
              //.Select(x => new PostGetViewModel { Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType /*, Comments  = CommentService.GetById(5).ToList()*/ }).ToList();

                return posts;
                //return db.Posts.ToList();

            }
        }
        public static IEnumerable<PostGetViewModel> GetByBloodType(string blood)
        {
            using (Entities db = new Entities())
            {
                IEnumerable<PostGetViewModel> posts = db.Posts.Select(x => new PostGetViewModel { Post_ID = x.Post_ID , Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType, Comments = x.Comments.Select(comment => new CommentGetViewModel { Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where(comment => comment.Post_ID == x.Post_ID ).ToList() }).Where(x => x.BloodType == blood).ToList();

                //  IEnumerable<PostGetViewModel> posts = db.Posts.Select(x => new PostGetViewModel { Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType }).Where(x=>x.BloodType == blood).ToList();
                return posts;
                //return db.Posts.ToList();

            }
        }
        public static PostGetViewModel GetPost (int PostId)
        {
            using (Entities db = new Entities())
            {
                PostGetViewModel posts = db.Posts.Select(x => new PostGetViewModel { Post_ID = x.Post_ID, Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType, Comments = x.Comments.Select(comment => new CommentGetViewModel { Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where(comment => comment.Post_ID == x.Post_ID).ToList() }).Where(x => x.Post_ID == PostId).FirstOrDefault();

                //  IEnumerable<PostGetViewModel> posts = db.Posts.Select(x => new PostGetViewModel { Text = x.Text, UserName = x.UserName, Date = x.Date, City = x.City, Address = x.Address, BloodType = x.BloodType }).Where(x=>x.BloodType == blood).ToList();
                return posts;
                //return db.Posts.ToList();

            }
        }

    }
}