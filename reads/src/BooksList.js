import React, { Component } from 'react';
import BooksIterator from './BooksIterator';

class BooksList extends Component {

    categorizeBooks = () => {
      let currentlyReading = [];
      let wantToRead = [];
      let read = [];

      if ( this.props.books.length > 0 ) {
        this.props.books.map(( book ) => {
          if ( book.shelf === 'currentlyReading' ) {
            currentlyReading.push(book);
          } else if ( book.shelf === 'wantToRead' ) {
            wantToRead.push(book);
          } else if ( book.shelf === 'read' ) {
            read.push(book);
          }
          return "Not Implemented";
        });
      };

      return { 
        "currentlyReading": currentlyReading, 
        "wantToRead": wantToRead, 
        "read": read 
      };
    };

    convertText = (s) => {
      let res = s.split(/(?=[A-Z])/).join(' ');
      return res.charAt(0).toUpperCase() + res.substring(1);
    };

    render () {
      let cats = this.categorizeBooks();
      return (
        <div className="list-books-content">
          <div>
            {Object.keys( cats ).map( ( title ) => {
              return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{ this.convertText( title ) }</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <BooksIterator books={ cats[ title ] } />
                    </ol>
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
      );
    }

}

export default BooksList;
