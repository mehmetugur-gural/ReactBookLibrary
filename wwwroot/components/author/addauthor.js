import React from 'react';

export default class AddAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.saveAuthor = this.saveAuthor.bind(this);
    }

    saveAuthor(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/Author/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/author");
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.saveAuthor}>
                    <div className="form-group row">
                        <label htmlFor="text" className="col-3 col-form-label">Author Name</label>
                        <div className="col-9">
                            <div className="input-group">
                                <input id="Name" name="Name" type="text" className="form-control here" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-3 col-9">
                            <button name="submit" type="submit" className="btn btn-primary">Save Author</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}