import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ListBooksTitle from '../ListBooksTitle'
import Book from '../Book'

class ListBooks extends Component {

    state = {
        shelfs: [
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
        const shelfs = this.state.shelfs
        const books = this.props.books

        return (
            <div className="list-books">
                <ListBooksTitle/>
                <div className="list-books-content">
                    {shelfs && shelfs.map((shelf) => (
                        <div key={shelf.name} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books && (books.filter(book => book.shelf === shelf.name).map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                updateShelf={this
                                                .props
                                                .updateShelf
                                                .bind(this)}/>
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
