using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AWW.Controllers
{
    public class ProductsController : FrontBaseController
    {
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }
    }
}