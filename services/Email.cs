using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
namespace webapi.services
{
    public static class EmailService
    {
        public static void SendEmail(string emailbody ,string toEmail)
        {
            // Specify the from and to email address
            MailMessage mailMessage = new MailMessage
                ("tmtmfathy@gmail.com", toEmail);
            // Specify the email body
            mailMessage.Body = emailbody;
            // Specify the email Subject
            mailMessage.Subject = "New Post of blood Type";

            // No need to specify the SMTP settings as these 
            // are already specified in web.config
            SmtpClient smtpClient = new SmtpClient();
            // Finall send the email message using Send() method
            smtpClient.Send(mailMessage);
        }
        public static bool SendMail(string ToEmail, string Subject, string EmailBody)
        {

            // var emailAccount = GetById(mailID);

            try
            {
                string smtpClient = "tmtmfathy@gmail.com";
                System.Net.Mail.MailMessage mess = new System.Net.Mail.MailMessage
                {
                    IsBodyHtml = true,
                    SubjectEncoding = Encoding.UTF8,
                    BodyEncoding = Encoding.UTF8
                };
                System.Net.WebClient client = new System.Net.WebClient();

                mess.Subject = Subject;
                mess.Body = EmailBody;
                System.Net.Mail.MailAddress m = new System.Net.Mail.MailAddress("tmtmfathy@gmail.com", "fatma", System.Text.Encoding.UTF8);
                
                mess.From = m;
                mess.To.Clear();
                //if (!string.IsNullOrEmpty(to))
                //{
                //    foreach (var email in to.Split(','))
                //    {
                //        mess.To.Add(email);
                //    }
                //}
                //mess.To.Clear();
                
                mess.To.Add(ToEmail);
             //  mess.To.Add("tmtmfathy@gmail.com");

                var smtp = new System.Net.Mail.SmtpClient(smtpClient)
                {
                    DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network
                };
                var network = new NetworkCredential("tmtmfathy@gmail.com", "F@tm@124FFR1996fatma");
                smtp.EnableSsl = false;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = network;
                smtp.Send(mess);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
    }
}