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
          return "Unimplemented";
        });
      };

      return { 
        "currentlyReading": currentlyReading, 
        "wantToRead": wantToRead, 
        "read": read 
      };
    };

    render () {
      let cats = this.categorizeBooks();
      return (
        <div className="list-books-content">
          <div>
            {Object.keys( cats ).map( ( title ) => {
              return (
                <div key={title+"bookshelf"} className="bookshelf">
                  <h2 key={title+"bookshelf-title"} className="bookshelf-title">{ this.props.convertText( title ) }</h2>
                  <div key={title+"bookshelf-books"} className="bookshelf-books">
                    <ol key={title+"books-grid"} className="books-grid">
                      <BooksIterator key={title+"iterator"}
                        library={ cats[title] }
                        convertText={this.props.convertText} 
                        moveBook={this.props.moveBook} 
                        books={ cats[ title ] } />
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
