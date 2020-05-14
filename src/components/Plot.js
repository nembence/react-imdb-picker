import React from 'react';

const Plot = (props) => {
    return (
        <a className="ui card" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com${props.link}`}>
            <div className="content">
                <div className="header">{props.title}</div>
                <div className="description">
                    <p>
                        {props.plot}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default Plot;