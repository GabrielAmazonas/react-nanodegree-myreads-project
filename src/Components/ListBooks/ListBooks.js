import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListBooksTitle from '../ListBooksTitle/ListBooksTitle'

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
        filterByShelf: function filterByShelf(booksArray, shelfName){
            const booksToReturn = booksArray.filter(book => book.shelf === shelfName)
            console.log (booksToReturn)
            return booksToReturn
        }
    }

    

    render() {
        const shelfs = this.state.shelfs
        const books = this.props.books

       

        console.log(books);
        return (
            <div className="list-books">
                <ListBooksTitle/>
                <div className="list-books-content">
                     {shelfs && shelfs.map((shelf) => (
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books && (this.state.filterByShelf(books, shelf.name).map((book) => (
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
