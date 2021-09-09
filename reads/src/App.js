import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BooksList from './BooksList';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Router>
              <Switch>
                <Route exact path="/search">
                  <SearchBooks />
                </Route>
                <Route exact path="/">
                  <BooksList />
                </Route>
              </Switch>
              <div className="open-search">
                <Link to="/search"><button></button></Link>
              </div>
            </Router>
          </div>
      </div>
    )
  }
}

export default BooksApp
