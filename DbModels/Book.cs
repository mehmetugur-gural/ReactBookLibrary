using System.Collections.Generic;

namespace ReactBookLibrary.DbModels
{
    public class Book {
        public int Id { get; set; }
        public string Name { get; set; }
        public BookCategory BookCategory { get; set; }
        public Author Author { get; set; }
    }
}