import React from 'react';
import { FaPlusCircle, FaTrash, FaPen, FaSearch } from 'react-icons/fa';

export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bookData: [], updatedBookData: [] };

        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.filterBooks = this.filterBooks.bind(this);
    }

    componentDidMount() {
        fetch("/api/Book/Get")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        bookData: result,
                        updatedBookData: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }


    deleteBook(id) {
        fetch('api/Book/Delete/' + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    bookData: this.state.bookData.filter((item) => {
                        return (item.id != id);
                    })
                });
        });
    }

    filterBooks(e) {
        var updatedList = this.state.bookData;
        updatedList = updatedList.filter((item) => {
            return Object.keys(item).some(key => item[key].toString().toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        });

        this.setState({
            updatedBookData: updatedList,
        });
    }

    editBook(id) {
        this.props.history.push("/editbook/" + id);
    }

    addBook(id) {
        this.props.history.push("/addbook");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Books</b></h2>
                                </div>
                                <div className="col-sm-3">
                                    <a onClick={(id) => this.addBook(0)} className="btn btn-success" style={{ height: 38 + 'px' }}><i className="material-icons"><FaPlusCircle /></i> <span>Add New Book</span></a>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback"><FaSearch /></span>
                                        <input type="text" className="form-control" placeholder="Search" onChange={this.filterBooks} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.updatedBookData.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.bookCategory.name}</td>
                                            <td>{item.author.name}</td>
                                            <td>
                                                <a onClick={(id) => this.editBook(item.id)} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><FaPen /></i></a>
                                                <a onClick={(id) => this.deleteBook(item.id)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><FaTrash /></i></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}