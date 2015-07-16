using AngularJSAndTypeScriptServer.Models;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace AngularJSAndTypeScriptServer.Controllers
{
    public class ProductsController : Controller
    {
		MasterContext _master = new MasterContext();
		// GET: Products
        public ActionResult Index()
        {
			Debug.WriteLine("getProducts();");
			return Json(_master.Products, JsonRequestBehavior.AllowGet); ;
        }
    }
}