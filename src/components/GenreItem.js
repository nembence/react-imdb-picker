import React from 'react';

const GenreItem = ({ genre, selected, title, handleClick}) => {
    return (
        <div 
            className={ genre === selected ? 'active item': 'item'}
            data-genre={genre}
            onClick={handleClick}
            >
        {title}</div>
    );
}

export default GenreItem;