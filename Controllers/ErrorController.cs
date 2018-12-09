using System;
using Microsoft.AspNetCore.Mvc;

namespace ReactBookLibrary.Controllers
{
   public class ErrorController : Controller
   {
      public IActionResult Index()
      {
         return View();
      }
   }
}