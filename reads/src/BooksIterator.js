import React from 'react';

function BooksIterator ( props ) {
    return props.books && props.books.length > 0 ? props.books.map( ( book ) => (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.smallThumbnail + '")' }}></div>
            <div className="book-shelf-changer">
                <select onChange={(event) => props.moveBook(event.target.value, book.id)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors ? book.authors.map(( author ) => (
                <div className="book-authors">{author}</div>
            )) : 'No Authors'}
        </div>
    )) : <div>No Results</div>;
}

export default BooksIterator;
