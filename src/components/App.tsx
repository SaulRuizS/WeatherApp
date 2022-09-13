import React from 'react';
import SearchInput from './SearchInput';
import Card from './Card';
import '../assets/styles/App.scss';

const App = () => {
    return (
        <div className='app'>
            <SearchInput />
            <Card />
        </div>
    );
};

export default App;