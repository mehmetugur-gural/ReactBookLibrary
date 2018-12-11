import React from 'react';

export default class AddBookCategory extends React.Component {

    constructor(props) {
        super(props);
        this.saveCategory = this.saveCategory.bind(this);
    }

    saveCategory(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/Category/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/bookcategory");
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.saveCategory}>
                    <div className="form-group row">
                        <label htmlFor="text" className="col-3 col-form-label">Category Name</label>
                        <div className="col-9">
                            <div className="input-group">
                                <input id="Name" name="Name" type="text" className="form-control here" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-3 col-9">
                            <button name="submit" type="submit" className="btn btn-primary">Save Category</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}