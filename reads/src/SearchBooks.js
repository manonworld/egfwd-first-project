import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksIterator from './BooksIterator';

class SearchBooks extends Component {

    state = {
        searchResults: false
    }

    handleSearch = ( event ) => {
        if ( event.target.value.length >= 3 ) {
            this.props.handleSearch( event.target.value );
            this.setState( () => ({
                searchResults: true
            }));
        }
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.handleSearch} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.searchResults ? 'Search Results' : 'Recommended Reads'}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.state.searchResults
                                ? <BooksIterator books={this.props.searchResults} />
                                : <BooksIterator books={this.props.books} />}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchBooks;
