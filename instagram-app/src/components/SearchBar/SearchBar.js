import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <header>
            <div className='header-title'>
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <div className='searchbar'>
                <input type='text' placeholder='Search' onChange={props.searchPosts}></input>
            </div>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </header>
    );
}

export default SearchBar;