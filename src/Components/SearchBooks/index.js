import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../../Services/BooksAPI'
import Book from '../Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    books: []
  }

  updateQuery = (query) => {
    const books = []
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
    books.sort(sortBy('title'))
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close Search
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(event) => this.updateQuery(event.target.value)}
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {books && (books.map((book) => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf}/>
              </li>
            )))}

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
