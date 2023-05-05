import React from "react"
import {browserHistory} from "react-router-dom"

const Context = React.createContext()

function ContextProvider({children}) {
    const [searchInput, setSearchInput] = React.useState("")
    const [rawResults, setRawResults] = React.useState([])
    const [movieResults, setMovieResults] = React.useState([])
    const [watchedMovies, setWatchedMovies] = React.useState([])
    const [loadingMovieData, setLoadingMovieData] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)
    const [isDark, setIsDark] = React.useState(false)
    
    function toggleColorMode() {
        setIsDark(!isDark)
    } 
    
    function updateWatchedMovies(movie) {
        const newWatchedMovies = watchedMovies.filter(watchedMovie => watchedMovie.imdbID !== movie.imdbID)
        newWatchedMovies.length === watchedMovies.length ? setWatchedMovies(prevWatchedMovies => [...prevWatchedMovies,movie]) : setWatchedMovies(newWatchedMovies)
    }
    
    function updateSearchInput(event) {
        setSearchInput(event.target.value)
    }
    
    function submitSearch() {
        setIsFetching(true)
        fetch(`https://www.omdbapi.com/?apikey=a2b6390a&type=movie&s=${searchInput}`)
            .then(res => res.json())
            .then(data => setRawResults(data))
    }
    
    function resetMovieResults() {
        setMovieResults([])
    }
    
    React.useEffect(() => {
        if (rawResults.Search) {
            setLoadingMovieData([])
            for (let rawResult of rawResults.Search) {
                fetch(`https://www.omdbapi.com/?apikey=a2b6390a&i=${rawResult.imdbID}`)
                    .then(res => res.json())
                    .then(data => data.Type && setLoadingMovieData(prevLoadingMovieData => [...prevLoadingMovieData, data]))
            }
        } else {
            setMovieResults(rawResults)
            setTimeout(() => setIsFetching(false), 3000)
        }
    }, [rawResults])
    
    React.useEffect(() => {
        if (rawResults.Search) {
            if (rawResults.Search.length === loadingMovieData.length) {
                setMovieResults(loadingMovieData)
                setTimeout(() => setIsFetching(false), 3000)
            }
        }
    }, [loadingMovieData])
    
    return (
        <Context.Provider value={{
            searchInput,
            updateSearchInput,
            submitSearch,
            movieResults,
            watchedMovies,
            updateWatchedMovies,
            isFetching,
            resetMovieResults,
            isDark,
            toggleColorMode
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}