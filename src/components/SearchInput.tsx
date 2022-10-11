import React, { createRef } from 'react';
import '../assets/styles/SearchInput.scss';

type queryProps = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
}

const SearchInput = ({
    query,
    setQuery,
}: queryProps) => {

    const searchInputRef:React.LegacyRef<HTMLInputElement> = createRef();

    return (
        <div
            className='search-input'>
            <form
                className='search-input__form'
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    className='search-input__textbox'
                    placeholder='Enter a city'
                    type="search"
                    ref={searchInputRef}
                />
                <button
                    className='search-input__button'
                    onClick={() => {
                        let queryValue = searchInputRef.current?.value;
                        setQuery(queryValue as string);
                        console.log(query);
                    }}
                ></button>
            </form>
        </div>
    );
};

export default SearchInput;