import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired

    }

    render() {
        const book = this.props.book
        return (

            <div className="book-shelf-changer">
                <select
                    onChange={(event) => {
                    if (event.target.value !== book.shelf) {
                        this
                            .props
                            .updateBook(book, event.target.value);
                    }
                }}
                    value={book.shelf
                    ? book.shelf
                    : "none"}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>

        )

    }

}

export default BookShelfChanger