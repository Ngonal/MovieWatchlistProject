import React from "react"
import {Context} from "../Context"

function MovieResult({movieResult}) {
    const {watchedMovies, updateWatchedMovies, isDark} = React.useContext(Context)
    
    const [isWatched, setIsWatched] = React.useState(watchedMovies.some(watchedMovie => watchedMovie.imdbID === movieResult.imdbID) ? true : false)
    
    return (
        <div 
            className="movie-result"
            style={isDark ? {borderColor: '#2C2C2C'} : {}}
        >
            <img 
                src={movieResult.Poster}
                className="movie-result-poster"
                onError={event => {
                    event.target.src = "../images/noPreview.jpeg"
                    event.onerror = null
                }}
            >
            </img>
            <div className="movie-result-info">
                <div className="movie-result-info-header">
                    <p 
                        className="movie-title"
                        style={isDark ? {color: 'white'} : {}}
                    >{movieResult.Title}</p>
                    <div className="movie-result-info-rating">
                        <img src="../images/starIcon.png" className="star-icon"/>
                        <p 
                            className="movie-rating"
                            style={isDark ? {color: 'white'} : {}}
                        >{movieResult.imdbRating}</p>
                    </div>
                </div>
                <div className="movie-result-info-subheader">
                    <div className="movie-result-info-main">
                        <p 
                            className="movie-runtime"
                            style={isDark ? {color: 'white'} : {}}
                        >{movieResult.Runtime}</p>
                        <p 
                            className="movie-genre"
                            style={isDark ? {color: 'white'} : {}}
                        >{movieResult.Genre}</p>
                    </div>
                    <div onClick={() => updateWatchedMovies(movieResult)} className="movie-result-info-watchlist-button">
                        <img src={isWatched ? "../images/removeIcon.png" : "../images/addIcon.png"} className={isDark ? "add-icon inverted-icon" : "add-icon"}/>
                        <p 
                            className="watchlist"
                            style={isDark ? {color: 'white'} : {}}
                        >Watchlist</p>
                    </div>
                </div>
                <p 
                    className="movie-result-info-section"
                    style={isDark ? {color: '#A5A5A5'} : {}}
                >{movieResult.Plot}</p>
            </div>
        </div>
    )
}

export default MovieResult