import React from 'react';
import '../assets/styles/SearchInput.scss';

const SearchInput = () => {
    return (
        <div className='search-input'>
            <form className='' action=''>
                <input
                    className='search-input__textbox'
                    placeholder='Enter a city'
                    type="search"
                />
                {/* <input className='search-input__button' type="button"/> */}
                <button className='search-input__button'></button>
            </form>
        </div>
    );
};

export default SearchInput;