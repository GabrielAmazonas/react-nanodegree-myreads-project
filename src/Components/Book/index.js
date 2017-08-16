import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from '../BookShelfChanger'

const Book = (props) => {

    Book.propTypes = {
        book: PropTypes.object.isRequired
    }

    const book = props.book

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}></div>

                <BookShelfChanger
                    book={book}
                    updateShelf={props
                    .updateShelf
                    .bind(this)}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )

}

export default Book