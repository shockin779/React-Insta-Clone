import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <header>
            <div className='header-title'>
                <i class="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <div className='searchbar'>
                <input type='text' placeholder='Search'></input>
            </div>
            <div className="header-icons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </header>
    );
}

export default SearchBar;