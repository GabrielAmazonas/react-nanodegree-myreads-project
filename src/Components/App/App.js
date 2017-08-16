import React from 'react'
import * as BooksAPI from '../../Services/BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from '../SearchBooks'
import ListBooks from '../ListBooks'

class App extends React.Component {

  getAllBooks = () => {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  updateShelf(book, shelf) {
    if (book.shelf !== shelf) {
      BooksAPI
        .update(book, shelf)
        .then(() => {
          this.getAllBooks()
        })
    }
  }


  //The state management doesn't work without the .bind(this) in the first Route component.
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (<ListBooks books={this.state.books} updateShelf={this.updateShelf.bind(this)}/>)}/>
        <Route
          exact
          path="/search"
          render={() => (<SearchBooks updateShelf={this.updateShelf} onCloseSearch={this.closeSearch}/>)}/>
      </div>

    )
  }
}

export default App
