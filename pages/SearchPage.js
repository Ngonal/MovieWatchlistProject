import React from "react"
import {nanoid} from "nanoid"
import {Context} from "../Context"
import MovieResult from "../components/MovieResult"

function SearchPage() {
    const {movieResults, isFetching, isDark} = React.useContext(Context)
    
    const movieResultElements = movieResults.Response === undefined ? movieResults.map(movieResult => 
        <MovieResult 
            key={nanoid()}
            movieResult={movieResult}
        />
    ) : <p 
            className="failed-search"
            style={isDark ? {opacity: '0.2'} : {}}
        >Unable to find what you're looking for. Please try another search.</p>
    
    return (
        <div className="search-page" 
            style={isDark ? {backgroundColor: '#121212'} : {}}
        >
            {   
                !isFetching ? (
                movieResults.length !== 0 ? 
                movieResultElements : 
                <div className="search-page-explore">
                    <img 
                        src="../images/movieReel.png" 
                        style={isDark ? {opacity: '0.2'} : {}}
                    />
                    <p 
                        style={isDark ? {opacity: '0.2'} : {}}
                    >Start exploring</p>
                </div>
                ) : <div className="lds-ellipsis">
                        <div style={isDark ? {background: 'white'} : {}}>
                        </div>
                        <div style={isDark ? {background: 'white'} : {}}>
                        </div>
                        <div style={isDark ? {background: 'white'} : {}}>
                        </div>
                        <div style={isDark ? {background: 'white'} : {}}>
                        </div>
                    </div>
            }
        </div>
    )
}

export default SearchPage