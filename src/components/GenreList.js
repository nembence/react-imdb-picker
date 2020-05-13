import React from 'react';
import GenreItem from './GenreItem';

class GenreList extends React.Component {
    state = {
        selected: ''
    }

    handleClick = event => {
        const genre = event.target.getAttribute('data-genre');
        this.setState({ selected: genre })
        this.props.onGenreClick(genre);
    }

    render() {
        const genres = ['Action','Drama','Animation','Comedy','Fantasy','Sci-Fi','Crime','Horror'];
        const renderedList = genres.map ( genre => {
            return (
                <GenreItem 
                    genre= {genre}
                    selected = {this.state.selected}
                    title= {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    handleClick= {this.handleClick}
                    key={genre}
                />
            );
        });
        return (
            <div className="ui secondary vertical pointing menu">
                {renderedList}
            </div>
        );
    }
}

export default GenreList;