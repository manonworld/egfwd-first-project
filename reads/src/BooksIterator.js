import React from 'react';

function BooksIterator ( props ) {
    return props.books && props.books.length > 0 ? props.books.map( ( book ) => {
            let thumbnail = book.hasOwnProperty("imageLinks") 
                ? book.imageLinks.smallThumbnail 
                : "/book.png"; 
            
            return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + thumbnail + '")' }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => props.moveBook(event.target.value, book.id, props.searchOrList)}>
                                <option value="move" disabled>Move to...</option>
                                <option selected={ book.shelf === "currentlyReading" ? true : false } value="currentlyReading">Currently Reading</option>
                                <option selected={ book.shelf === "wantToRead" ? true : false } value="wantToRead">Want to Read</option>
                                <option selected={ book.shelf === "read" ? true : false } value="read">Read</option>
                                <option selected={ !book.shelf ? true : false } value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors ? book.authors.map(( author ) => (
                        <div className="book-authors">{author}</div>
                    )) : 'No Authors'}
                </div>
            )
    }) : <div>No Results</div>;
}

export default BooksIterator;
