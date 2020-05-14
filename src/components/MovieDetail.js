import React from 'react';
import Poster from './Poster';
import Plot from './Plot';
import './MovieDetails.css';

const MovieDetail = (props) => {
    if (!props.movie) {
        return <div className="ui active centered inline loader"></div>
    } else {
        return (
            <div>
                <Poster 
                    poster={props.movie.poster} 
                    rating={props.movie.rating}
                />
                <Plot 
                    link={props.movie.link}
                    title={props.movie.title}
                    plot={props.movie.plot}
                />
            </div>
        );
    }
    
}

export default MovieDetail;