import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksIterator from './BooksIterator';
import PropTypes from 'prop-types';

class SearchBooks extends Component {

    static propTypes = {
        handleSearch: PropTypes.func.isRequired,
        resetSearch: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired,
        searchResults: PropTypes.array.isRequired,
        convertText: PropTypes.func.isRequired
    }

    state = {
        searchResults: false
    }

    handleSearch = ( event ) => {
        if ( event.target.value.length >= 3 ) {
            this.props.handleSearch( event.target.value );
            this.setState( () => ({
                searchResults: true
            }));
        } else {
            this.props.resetSearch();
            this.setState( () => ({
                searchResults: false
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
                        <h2 className="bookshelf-title">{this.state.searchResults ? 'Search Results' : 'Please type a search term'}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <BooksIterator 
                                    searchOrList='search' 
                                    library={this.props.books} 
                                    moveBook={this.props.moveBook} 
                                    books={this.props.searchResults}
                                    convertText={this.props.convertText} />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchBooks;
