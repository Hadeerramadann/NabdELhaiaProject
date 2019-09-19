using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi.services;

namespace webapi.Controllers
{
    public class ServiceController : ApiController
    {
        [HttpGet]
        public bool SendMail(string Emailbody , string toEmail) {
          //  toEmail = "fatma.f1204@gmail.com";
           // Emailbody = "mail";
            EmailService.SendEmail(Emailbody , toEmail);
            return true;
            //string ToEmail = "fatma.f1204@gmail.com";
            //string Subject = "";
            //string EmailBody = "";
            //return  EmailService.SendMail(ToEmail, Subject, EmailBody);
        }
       
    }
}
