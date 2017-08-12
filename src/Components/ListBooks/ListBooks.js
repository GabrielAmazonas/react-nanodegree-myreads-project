import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListBooksTitle from '../ListBooksTitle/ListBooksTitle'
import Book from '../Book/Book'


class ListBooks extends Component {
    static propTypes = {}

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
        ],
        filterByShelf: "" 
    }

    filterByShelf(booksArray, shelfName){
            const booksToReturn = booksArray.filter(book => book.shelf === shelfName)
            return booksToReturn
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
                                    {books && (this.filterByShelf(books, shelf.name).map((book) => (
                                        <li key={book.id}>
                                            <Book book={book} updateShelf={this.props.updateShelf.bind(this)}/>
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
