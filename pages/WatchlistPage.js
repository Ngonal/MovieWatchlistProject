import React from "react"
import {nanoid} from "nanoid"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import MovieResult from "../components/MovieResult"

function WatchlistPage() {
    const {watchedMovies, isDark} = React.useContext(Context)
    
    const watchedMovieElements = watchedMovies.map(watchedMovie =>
        <MovieResult 
            key={nanoid()}
            movieResult={watchedMovie}
        />
    )
    
    return (
        <div 
            className="watchlist-page"
            style={isDark ? {backgroundColor: '#121212'} : {}}
        >
            {
                watchedMovies.length ?
                watchedMovieElements :
                <div className="empty-watchlist">
                    <p
                        style={isDark ? {opacity: '0.2'} : {}}
                    >Your watchlist is looking a little empty...</p>
                    <Link to="/" 
                        style={isDark ? 
                            {
                                textDecoration: 'none', 
                                color: 'white', 
                                border: 'none', 
                                fontWeight: 'bold',
                                marginTop: '10px'
                            } 
                            :
                            {
                                textDecoration: 'none', 
                                color: 'black', 
                                border: 'none', 
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }
                        } 
                        className="add-some-movies"
                    >
                        <img className={isDark ? "inverted-icon" : undefined}src="../images/addIcon.png"/>
                        Let's add some movies!
                    </Link>
                </div>
            }
        </div>
    )
}

export default WatchlistPage