import React from 'react';
import './MovieDetails.css';

const MovieDetail = (props) => {
    if (!props.movie) {
        return <div className="ui active centered inline loader"></div>
    } else {
        return (
            <div>
                <div className="ui special cards">
                    <div className="card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Add Friend</div>
                                    </div>
                                </div>
                            </div>
                            <img src={props.movie.poster} alt='imdb poster'/>
                        </div>
                    <div className="content">
                        <div className="header star">{props.movie.rating} <i className="star icon"></i></div>
                        </div>
                    </div>
                </div>  
                <a className="ui card" target="_blank" without rel="noopener noreferrer" href={`https://www.imdb.com${props.movie.link}`}>
                    <div className="content">
                        <div className="header">{props.movie.title}</div>
                        <div className="description">
                            <p>
                                {props.movie.plot}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    
}

export default MovieDetail;