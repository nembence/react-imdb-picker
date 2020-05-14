import React from 'react';


const Poster = (props) => {
    return (
        <div className="ui special cards">
            <div className="card">
                <div className="blurring dimmable image">
                    <img src={props.poster} alt='imdb poster'/>
                </div>
            <div className="content">
                <div className="header star">{props.rating} <i className="star icon"></i></div>
                </div>
            </div>
        </div> 
    );
}

export default Poster;
