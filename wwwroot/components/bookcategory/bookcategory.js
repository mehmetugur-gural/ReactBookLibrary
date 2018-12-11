import React from 'react';
import { FaPlusCircle, FaTrash, FaPen } from 'react-icons/fa';

export default class BookCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { categoryData: [] };

        this.addCategory = this.addCategory.bind(this);
    }

    componentDidMount() {
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
    }

    addCategory(id) {
        this.props.history.push("/addbookcategory");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Categories</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={(id) => this.addCategory(0)}  className="btn btn-success"><i className="material-icons"><FaPlusCircle /></i> <span>Add New Category</span></a>
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
                                {this.state.categoryData.map((item, i) => {
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