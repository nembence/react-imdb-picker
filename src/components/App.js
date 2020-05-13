import React from 'react';
import Picker from './Picker';
import axios from 'axios';
import './App.css';
import GenreList from './GenreList';
import MovieDetail from './MovieDetail';

const KEY = 'f7065b9902mshac35905097f1209p1974c1jsn08530376a33a'
const OMKEY = '27b96db8';

class App extends React.Component {
    state = {
        movieLinks: [],
        movies: [],
        randomMovie: null,
        netflixID: null
    }
    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const response = await axios({
            "method":"GET",
            "url":"https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"imdb8.p.rapidapi.com",
            "x-rapidapi-key": KEY,
            "useQueryString":true
            }
        });
        this.setState({ moviesLinks: response.data });  
        this.getMovieDetails()
    }

    getMovieDetails = async () => {
        let i=0;
        let movies = this.state.moviesLinks;
        const fetchedMovies = [];
        for(i;i< movies.length;i++){
            const link = movies[i].id.slice(7,16)
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMKEY}&i=${link}`)
            fetchedMovies.push({
                title: response.data.Title,
                genre: response.data.Genre,
                poster: response.data.Poster,
                plot: response.data.Plot,
                rating: response.data.imdbRating,
                link: movies[i].id
            })
        }
        this.setState({ movies: fetchedMovies})
    }

    onGenreClick = genre => {
        const filteredMovies = [];
        const movies = this.state.movies;
        let i=0;
        for(i;i< movies.length;i++){
            let movieGenre = movies[i].genre.toString();
            if (movieGenre.includes(genre)) {
                filteredMovies.push(movies[i])
            }
        }
        this.getRandomMovie(filteredMovies)
    }

    getRandomMovie = (filteredMovies) => {
        const random = Math.floor(Math.random() * filteredMovies.length-1);
        const selectedMovie = filteredMovies[random];
        this.setState({ randomMovie: selectedMovie })
        console.log(selectedMovie);
        this.getNetflix()
    }

    getNetflix = async (id) => {
        const response = await axios.get('https://netflixroulette.net/api/v2/usa/imdb/?imdbId=tt0115641');
        console.log(response)
    }

    render() {
        return(
            <div>
                <div className="label">pick.</div>
                <div className="ui container">
                    
                    <div className="ui grid">
                        <div className="three wide column">
                            <GenreList onGenreClick = {this.onGenreClick}/>
                        </div>
                        <div className="thirten wide stretched column">
                            <div>
                                <MovieDetail movie={this.state.randomMovie} netflixID={this.state.netflixID}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui inverted vertical footer segment form-page">
                        <span className="pick">pick.</span>
                </div>
            </div> 
        ); 
    }
}

export default App;