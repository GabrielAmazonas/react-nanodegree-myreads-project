import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ListBooksTitle extends Component {

    render() {

        return (

            <div className="list-books-title">
                <div className="profile-name"></div>
                <div className="github-profile"></div>
                <div className="twitter-profile"></div>
                <div className="linkedin-profile"></div>
                <h1>@GabrielAmazonas Reads</h1>
            </div>
        )

    }

}

export default ListBooksTitle