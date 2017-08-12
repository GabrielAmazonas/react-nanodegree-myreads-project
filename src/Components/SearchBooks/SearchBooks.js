import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../../Services/BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    maxResults: 10
  }

  updateQuery = (query) => {
    let books = []
    if (query !== '') {
      BooksAPI
        .search(query)
        .then(books => {
          this.setState({books})
        })
    } else {
      this.setState({books})
    }

  }

  closeSearch = (e) => {
    e.preventDefault();
    this
      .props
      .onCloseSearch();
  }

  render() {
    const {books} = this.state
    const allBooks = this.props.books

    let showBooks

    if (allBooks !== undefined && allBooks.length > 0) {
      showBooks = allBooks
    }
    if (books !== undefined && books.length > 0) {
      showBooks = books
    }
    if (showBooks !== undefined && showBooks.length > 0) {
      showBooks.sort(sortBy('title'))
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close Search
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(event) => {
              this.updateQuery(event.target.value)
            }}
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {showBooks && (showBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`
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
            )))}

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
