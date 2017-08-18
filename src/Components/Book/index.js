import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from '../BookShelfChanger'
import * as BooksAPI from '../../Services/BooksAPI'

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }

    state = {
    }

    componentDidMount() {
        const book = this.props.book
        console.log('Component ' + book.title + ' mounted')
        BooksAPI
            .get(book.id)
            .then((book) => {
                console.log('Book ' + book.title + ' found')
                this.setState({book})
                console.log('Book ' + book.title + ' Went to State')
                console.log('Shelf ' + book.shelf)
            })
    }

    updateBook = (book, shelf) => {
        console.log('Updating Book ' + book.title + ' on the back end')
        console.log('Book Shelf: ' + shelf)
        BooksAPI
            .update(book, shelf)
            .then(() => {
                BooksAPI
                    .get(book.id)
                    .then((book) => {
                        console.log('Updated shelf ' + book.shelf)
                        this.setState({book});
                        this
                            .props
                            .updateShelf(book, shelf);
                    })
            })
    }

    render() {
        const {book} = this.state
        return (

            <div className="book">
                {book && (
                    <div className="validate-book">
                        <div className="book-top">
                            <div
                                className="book-cover"
                                style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}></div>

                            <BookShelfChanger book={book} updateBook={this.updateBook}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                )}

            </div>
        )
    }
}

export default Book