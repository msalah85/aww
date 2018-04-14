using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using AWW.Infrastructure.Helpers;
namespace AWW.Controllers
{
    public class CommonController : FrontBaseController
    {
        
        public CommonController()
        {
            
        }
        // GET: Common
        public ActionResult Index()
        {
            return View();
        }
      
        public ActionResult SetCulture(string culture)
        {
            // Validate input
            culture = CultureHelper.GetImplementedCulture(culture);

            // Save culture in a cookie
            HttpCookie cookie = Request.Cookies["_culture"];
            if (cookie != null)
                cookie.Value = culture;   // update cookie value
            else
            {

                cookie = new HttpCookie("_culture");
                cookie.Value = culture;
                //cookie.Expires = DateTime.Now.AddTicks(1);
            }
            Response.Cookies.Add(cookie);
            //Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo(culture);
            //Thread.CurrentThread.CurrentUICulture = Thread.CurrentThread.CurrentCulture;

           System.Web.HttpContext.Current.Session["culture"] = culture;

           // return RedirectToAction("Index","Home");
            return Redirect(Request.UrlReferrer.ToString());
        }

        
    }
}