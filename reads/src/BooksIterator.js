import React from 'react';

class BooksIterator extends React.Component {

    categories = ['currentlyReading', 'wantToRead', 'read', 'none'];

    render () {
        return this.props.books && this.props.books.length > 0 ? this.props.books.map( ( book ) => {
            let thumbnail = book.hasOwnProperty("imageLinks") ? book.imageLinks.smallThumbnail : "/book.png";            
            return (
                <li key={book.id+"li"}>
                    <div key={book.id+"book"} className="book">
                        <div key={book.id+"book-top"} className="book-top">
                            <div key={book.id+"book-cover"} className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + thumbnail + '")' }}></div>
                            <div key={book.id+"book-shelf-changer"} className="book-shelf-changer">
                                <select multiple={ false } value={this.getShelf( book )} key={book.id+"select"} onChange={(event) => this.props.moveBook(event.target.value, book, this.props.searchOrList)}>
                                    <option key={book.id+"move"} value="move" disabled>Move to...</option>
                                    {this.categories.map((category) => (
                                        <option key={book.id+category} value={category}>{this.props.convertText(category)}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div key={book.id+"book-title"} className="book-title">{book.title}</div>
                        {book.authors ? book.authors.map(( author ) => (
                            <div key={book.id+author} className="book-authors">{author}</div>
                        )) : 'No Authors'}
                    </div>
                </li>
            )
        }) : <li><div>No Results</div></li>;
    }

    getShelf = ( book ) => {
        if ( book.hasOwnProperty( "shelf" ) === true ) {
            return book.shelf;
        } else {
            let bookInLib = this.props.library.filter(( libBook ) => {
                return ( libBook.id === book.id );
            });

            if( bookInLib.length === 1 ) {
                return bookInLib[0].shelf;
            } else {
                return "none";
            }
        }
    }

}

export default BooksIterator;
