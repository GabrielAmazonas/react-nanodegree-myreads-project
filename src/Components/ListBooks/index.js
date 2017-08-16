import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ListBooksTitle from '../ListBooksTitle'
import Book from '../Book'

class ListBooks extends Component {

    state = {
        shelves: [
            {
                name: "currentlyReading",
                title: "Currently Reading"
            }, {
                name: "wantToRead",
                title: "Want to Read"
            }, {
                name: "read",
                title: "Read"
            }
        ]
    }

    render() {
        const {shelves} = this.state
        const {books} = this.props

        return (
            <div className="list-books">
                <ListBooksTitle/>
                <div className="list-books-content">
                    {shelves && shelves.map((shelf) => (
                        <div key={shelf.name} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books && (books.filter(book => book.shelf === shelf.name).map((book) => (
                                        <li key={book.id}>
                                            <Book book={book} updateShelf={this.props.updateShelf}/>
                                        </li>
                                    )))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Search Books
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
