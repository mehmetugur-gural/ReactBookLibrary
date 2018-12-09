import React from 'react';
import { FaStepBackward} from 'react-icons/fa';

export default class Book extends React.Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div class="error-details">
                                Sorry, an error has occured, Requested page not found!
                </div>
                            <div class="error-actions">
                                <a href="/book" class="btn btn-primary btn-lg"><FaStepBackward />
                                    Take Me Back </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}