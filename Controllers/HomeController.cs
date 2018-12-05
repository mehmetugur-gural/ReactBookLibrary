using System;
using Microsoft.AspNetCore.Mvc;

namespace ReactBookLibrary.Controllers
{
   public class HomeController : Controller
   {
      public IActionResult Index()
      {
         return View();
      }
   }
}