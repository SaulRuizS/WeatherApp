import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import '../assets/styles/SearchInput.scss';

type queryProps = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
}

const SearchInput = (props: queryProps) => {
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