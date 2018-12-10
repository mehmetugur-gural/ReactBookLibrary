import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaCog, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Book from './wwwroot/components/book/book.js';
import AddBook from './wwwroot/components/book/addbook.js';
import BookCategory from './wwwroot/components/bookcategory/bookcategory.js';
import Author from './wwwroot/components/author/author.js';
import NotFound from './wwwroot/components/errorpages/notfound.js';

export default class App extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <Router>
            <div>
               <div className="wrapper">
                  {/* Sidebar  */}
                  <nav id="sidebar">
                     <div className="sidebar-header">
                        <h3>The Book Shop</h3>
                     </div>
                     <ul className="list-unstyled components">
                        <li>
                           <Link to="/book/">Books</Link>
                        </li>
                        <li>
                           <Link to="/bookcategory/">Book Categories</Link>
                        </li>
                        <li>
                           <Link to="/author/">Authors</Link>
                        </li>
                     </ul>
                  </nav>
                  {/* Page Content  */}
                  <div id="content">
                     <Switch>
                        <Route exact path="/" component={Book} />
                        <Route path="/book" component={Book} />
                        <Route path="/addbook" component={AddBook} />
                        <Route path="/editbook/:id" component={AddBook} />
                        <Route path="/bookcategory" component={BookCategory} />
                        <Route path="/author" component={Author} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
);

module.hot.accept();