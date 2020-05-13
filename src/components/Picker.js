import React from 'react';
import './Picker.css';

class Picker extends React.Component{
    state = {
        selected: ''
    }

    handleClick = event => {
        const type = event.target.getAttribute('data-type');
        this.setState({ selected: type });
    }

    render() {
        return (
            <div className="ui two item menu">
                <div 
                    className={this.state.selected === 'tv' ? 'active item': 'item'} 
                    data-type='tv' 
                    onClick={this.handleClick}>
                Tv show</div>
                <div 
                    className={this.state.selected === 'movie' ? 'active item': 'item'} 
                    data-type='movie' 
                    onClick={this.handleClick}>
                Movie</div>
            </div>  
        );
    }
}

export default Picker;