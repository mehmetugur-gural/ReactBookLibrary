import React from 'react';
import { FaPlusCircle, FaTrash, FaPen } from 'react-icons/fa';

export default class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bookData: [] };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSave}>
                    <div className="form-group row">
                        <input type="hidden" name="employeeId" />
                    </div>
                    <div className="form-group row">
                        <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="name" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                        <div className="col-md-4">
                            <select className="form-control" data-val="true" name="gender">
                                <option value="">-- Select Gender --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="Department" >Department</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="Department" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-md-12" htmlFor="City">City</label>
                        <div className="col-md-4">
                            <select className="form-control" data-val="true" name="City">
                                <option value="">-- Select City --</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Save</button>
                        <button className="btn">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}