import React from 'react'
import * as BooksAPI from './BooksAPI'
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

  state = {
      books: [],
      searchResults: null
  }

  constructor ( props ) {
    super( props );
    this.listBooks();
  }

  setBooksList = ( books ) => {
    this.setState( () => ({
      books: books
    }));
  };

  listBooks = () => {
      BooksAPI.getAll().then( ( data ) => {
          this.setBooksList( data );
      });
  };

  handleSearch = ( term ) => {
    BooksAPI.search( term ).then( ( data ) => (
      this.setState( () => ({
        searchResults: data
      }))
    ));
  };

  moveBook = ( shelf, bookId ) => {
    BooksAPI.get( bookId ).then( ( book ) => (
      BooksAPI.update( book, shelf ).then( ( data ) => {
        this.setState( ( prevState ) => {
          let bookIdx = prevState.books.findIndex((obj => obj.id === bookId));
          let updatedBook = prevState.books[bookIdx];
          updatedBook.shelf = shelf;
          let newBooksList = prevState.books.filter((book) => book.id !== bookId);
          let finalBooksList = [...newBooksList, updatedBook];
          return {
            books: finalBooksList
          };
        })
      })
    ));
  };


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
                  <SearchBooks
                    searchResults={this.state.searchResults}
                    handleSearch={this.handleSearch}
                    setBooksList={this.setBooksList}
                    books={this.state.books}
                    moveBook={this.moveBook}
                  />
                </Route>
                <Route exact path="/">
                  <BooksList books={this.state.books} moveBook={this.moveBook} />
                </Route>
              </Switch>
              <div className="open-search">
                <Link to="/search"><button style={{cursor: 'pointer'}}></button></Link>
              </div>
            </Router>
          </div>
      </div>
    )
  }
}

export default BooksApp
