import React from 'react';

export default class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authorData: [],
            categoryData: [],
            bookId: this.props.match.params["id"],
            categoryId: [],
            authorId: [],
            bookData: []
        };

        this.saveBook = this.saveBook.bind(this);
    }

    saveBook(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        if (this.state.bookId) {
            fetch('/api/Book/Update', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/book");
                });
        }
        else {
            fetch('/api/Book/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/book");
                });
        }
    }

    componentDidMount() {
        if (this.state.bookId > 0) {
            fetch("/api/Book/Details/" + this.state.bookId)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            bookData: result,
                            categoryId: result.bookCategory.id,
                            authorId: result.author.id
                        });
                    },
                    (error) => {
                        this.setState({
                            error
                        });
                    }
                )
        }

        fetch("/api/Category/Get")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        categoryData: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )

        fetch("/api/Author/Get")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        authorData: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.saveBook}>
                    <div className="form-group row">
                        <input type="hidden" name="Id" value={this.state.bookId || ''} />
                        <label htmlFor="text" className="col-3 col-form-label">Book Name</label>
                        <div className="col-9">
                            <div className="input-group">
                                <input id="Name" name="Name" type="text" className="form-control here" defaultValue={this.state.bookData.name || ''} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="BookCategoryId" className="col-3 col-form-label">Book Category</label>
                        <div className="col-9">
                            <select id="BookCategoryId" name="BookCategoryId" aria-describedby="bookCategoryHelpBlock" className="custom-select">
                                {this.state.categoryData.map((item, i) => {
                                    return (
                                        <option key={i} value={item.id} selected={item.id == this.state.categoryId}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <span id="bookCategoryHelpBlock" className="form-text text-muted">Please select a category for this book</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="AuthorId" className="col-3 col-form-label">Author</label>
                        <div className="col-9">
                            <select id="AuthorId" name="AuthorId" className="custom-select" aria-describedby="bookAuthorHelpBlock">
                                {this.state.authorData.map((item, i) => {
                                    return (
                                        <option key={i} value={item.id} selected={item.id == this.state.authorId}>{item.name}</option>
                                    )
                                })}
                            </select>
                            <span id="bookAuthorHelpBlock" className="form-text text-muted">Please select an author for this book</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-3 col-9">
                            <button name="submit" type="submit" className="btn btn-primary">Save Book</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}