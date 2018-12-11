using System;
using Microsoft.AspNetCore.Mvc;
using ReactBookLibrary.DbModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

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
        public IEnumerable<Book> GetBooks()
        {
            var books = _context.Books.Include(x => x.BookCategory).Include(x => x.Author).ToListAsync().Result;

            foreach(Book bookItem in books)
            {
               bookItem.CategoryName = bookItem.BookCategory.Name;
               bookItem.AuthorName = bookItem.Author.Name;
            }

            return books;
        }

        [HttpGet]
        [Route("api/Category/Get")]
        public IEnumerable<BookCategory> GetCategories()
        {
            var bookCategories = _context.BookCategories.ToListAsync().Result;
            return bookCategories;
        }

        [HttpGet]
        [Route("api/Author/Get")]
        public IEnumerable<Author> GetAuthors()
        {
            var authors = _context.Authors.ToListAsync().Result;
            return authors;
        }

        [HttpGet]
        [Route("api/Book/Details/{id}")]
        public Book Details(int id)
        {
            var books = _context.Books.Include(x => x.BookCategory).Include(x => x.Author).ToListAsync().Result;
            return books.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        [Route("api/Book/Create")]
        public int CreateBook(BookModel bookModel)
        {
            Book book = new Book()
            {
                Id = _context.Books.Include(x => x.BookCategory).Include(x => x.Author).ToListAsync().Result.OrderByDescending(x => x.Id).FirstOrDefault().Id + 1,
                Name = bookModel.Name,
                BookCategory = _context.BookCategories.Find(bookModel.BookCategoryId),
                Author = _context.Authors.Find(bookModel.AuthorId)
            };

            _context.Books.Add(book);

            return _context.SaveChanges();
        }

        [HttpPut]
        [Route("api/Book/Update")]
        public int Update(BookModel bookModel)
        {
            Book book = new Book()
            {
                Id = bookModel.Id,
                Name = bookModel.Name,
                BookCategory = _context.BookCategories.Find(bookModel.BookCategoryId),
                Author = _context.Authors.Find(bookModel.AuthorId)
            };

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

        [HttpPost]
        [Route("api/Category/Create")]
        public int CreateCategory(BookCategory bookCategory)
        {
            BookCategory category = new BookCategory()
            {
                Id = _context.BookCategories.ToListAsync().Result.OrderByDescending(x => x.Id).FirstOrDefault().Id + 1,
                Name = bookCategory.Name
            };

            _context.BookCategories.Add(category);

            return _context.SaveChanges();
        }

        [HttpPost]
        [Route("api/Author/Create")]
        public int CreateAuthor(Author bookAuthor)
        {
            Author author = new Author()
            {
                Id = _context.Authors.ToListAsync().Result.OrderByDescending(x => x.Id).FirstOrDefault().Id + 1,
                Name = bookAuthor.Name
            };

            _context.Authors.Add(author);

            return _context.SaveChanges();
        }
    }
}