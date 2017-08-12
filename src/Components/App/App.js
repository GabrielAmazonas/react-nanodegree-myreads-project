import React from 'react'
import * as BooksAPI from '../../Services/BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from '../SearchBooks/SearchBooks'
import ListBooks from '../ListBooks/ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidUpdate() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))

  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  updateShelf(book, shelf) {
    if (book.shelf !== shelf) {
      BooksAPI
        .update(book, shelf)
        .then(book => this.setState({book}))
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (<ListBooks
          books={this.state.books}
          updateShelf={this
          .updateShelf
          .bind(this)}/>)}/>
        <Route
          exact
          path="/search"
          render={() => (<SearchBooks
          books={this.state.books}
          updateShelf={this
          .updateShelf
          .bind(this)}
          onCloseSearch={this.closeSearch}/>)}/>
      </div>

    )
  }
}

export default BooksApp
