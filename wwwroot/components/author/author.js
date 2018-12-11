import React from 'react';
import { FaPlusCircle, FaTrash, FaPen } from 'react-icons/fa';

export default class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = { authorData: [] };

        this.addAuthor = this.addAuthor.bind(this);
    }

    componentDidMount() {
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

    addAuthor(id) {
        this.props.history.push("/addauthor");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Authors</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={(id) => this.addAuthor(0)}  className="btn btn-success"><i className="material-icons"><FaPlusCircle /></i> <span>Add New Author</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.authorData.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
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