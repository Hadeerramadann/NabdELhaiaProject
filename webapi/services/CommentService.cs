using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using webapi.Models;
using webapi.ViewModels;

namespace webapi.services
{
    public class CommentService
    {

        public static bool Create(CommentCreateViewModel comment)
        {
            //  User newuser = new User();
            Comment newComment = new Comment();
            newComment.Post_ID = comment.Post_ID;
            newComment.Text = comment.Text;
            newComment.Date = comment.Date;
            newComment.UserName = comment.UserName;
            using (Entities db = new Entities())
            {
                db.Comments.Add(newComment);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public static IEnumerable<CommentGetViewModel> Get()
        {
            using (Entities db = new Entities())
            {
                IEnumerable<CommentGetViewModel> comments = db.Comments.Select(comment  => new CommentGetViewModel {  Text = comment.Text,Date = comment.Date  , UserName = comment.UserName}).ToList();
                return comments;
             

            }
        }
        public static IEnumerable<CommentGetViewModel> GetById(int id)
        {
            using (Entities db = new Entities())
            {
                IEnumerable<CommentGetViewModel> comments = db.Comments.Select(comment => new CommentGetViewModel {Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where(comment => comment.Post_ID == id).ToList();
                return comments;


            }
        }
        /*
        public static IEnumerable<CommentGetViewModel> GetComment(string username) {
            IEnumerable<PostGetViewModel> postes = PostService.GetPosts(username);
            IEnumerable<CommentGetViewModel> commentes = null;
            /*List<int> items = new List<int>() ;
            //  string query = "";
            int i = 0;
            foreach (var item in postes)
            {
               items[i]=(item.Post_ID);
                i++;
            }

         
            using (Entities db = new Entities())
            {
                commentes = db.Comments.Select(comment => new CommentGetViewModel { Post_ID = comment.Post_ID, Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where().ToList();
                // commentes.AddRange(comments);   
            }
            return commentes;
            
            //return null;
            /* IEnumerable<PostGetViewModel> postes = PostService.GetPosts(username);
             ICollection<CommentGetViewModel> commentes  ; 

             foreach (var item in postes)
             {
                 using (Entities db = new Entities())
                 {
                    commentes = db.Comments.Select(comment => new CommentGetViewModel { Text = comment.Text, Date = comment.Date, UserName = comment.UserName }).Where(x => x.Post_ID == item.Post_ID).ToList();
                   //  commentes.Add(x_comment);
                     return commentes;


                 }
             }
             return null;
             
        }*/

    }

}