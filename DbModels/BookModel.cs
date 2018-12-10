using System.Collections.Generic;

namespace ReactBookLibrary.DbModels
{
    public class BookModel {
        public int Id { get; set; }
        public string Name { get; set; }
        public int BookCategoryId { get; set; }
        public int AuthorId { get; set; }
    }
}