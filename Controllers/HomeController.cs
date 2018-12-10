using System;
using Microsoft.AspNetCore.Mvc;
using ReactBookLibrary.DbModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ReactBookLibrary.Controllers
{
    public class HomeController : Controller
    {
        private readonly EfContext _context;

        public HomeController(EfContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Book/Get")]
        public IEnumerable<Book> GetBook()
        {
            var books = _context.Books.Include(x => x.BookCategory).Include(x => x.Author).ToListAsync().Result;
            return books;
        }

        [HttpPost]
        [Route("api/Book/Create")]
        public int CreateBook(Book book)
        {
            _context.Books.Add(book);
            return _context.SaveChanges();
        }

        [HttpPut]
        [Route("api/Book/Update")]
        public int Update(Book book)
        {
            _context.Books.Update(book);
            return _context.SaveChanges();
        }

        [HttpDelete]
        [Route("api/Book/Delete")]
        public int Delete(int id)
        {
            Book book = _context.Books.Find(id);
            _context.Books.Remove(book);
            return _context.SaveChanges();
        }
    }
}