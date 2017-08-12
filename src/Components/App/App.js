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

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<ListBooks books={this.state.books}/>)}/>
        <Route
          exact
          path="/search"
          render={() => (<SearchBooks books={this.state.books} onCloseSearch={this.closeSearch}/>)}/>
      </div>

    )
  }
}

export default BooksApp
