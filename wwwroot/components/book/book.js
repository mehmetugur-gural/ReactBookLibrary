import React from 'react';
import { FaPlusCircle, FaTrash, FaPen } from 'react-icons/fa';

export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bookData: [] };

        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
    }

    componentDidMount() {
        fetch("/api/Book/Get")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        bookData: result
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

    editBook(id) {
        this.props.history.push("/addbook/" + id);
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
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"><FaPlusCircle /></i> <span>Add New Book</span></a>
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
                                {this.state.bookData.map((item, i) => {
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