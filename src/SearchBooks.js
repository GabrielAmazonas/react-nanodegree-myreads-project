import React, {Component} from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

class SearchBooks extends Component {
  static propTypes = {}

  state = {
    query: '',
    bookResults: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  closeSearch = (e) => {
    e.preventDefault();
    this
      .props
      .onCloseSearch();
  }

  render() {

    const {query, bookResults} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
                Close Search 
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              onChange={(event) => {
              console.log(event.target.value)
              this.updateQuery(event.target.value)
            }}
              type="text"
              placeholder="Search by title or author"/> {/*When the query changes, show list of matching books.*/}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {bookResults.map((book) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.bookcover})`
                    }}></div>

                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
