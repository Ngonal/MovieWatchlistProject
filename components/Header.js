import React from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {
        searchInput, 
        updateSearchInput, 
        submitSearch, 
        isFetching,
        resetMovieResults,
        isDark,
        toggleColorMode
    } = React.useContext(Context)
    
    return (
        <div 
            className="header"
            style={isDark ? {backgroundColor: '#121212'} : {}}
        >
            <div className="header-grouping">
                <div className="search-bar">
                    <input 
                        onKeyUp={(event) => event.key === "Enter" && submitSearch()}
                        type="text"
                        placeholder="Search for a movie"
                        onChange={updateSearchInput}
                        value={searchInput}
                        className="search-input"
                        style={isDark ? {backgroundColor: '#2E2E2F', borderColor: '#2E2E2F', color: '#A5A5A5'} : {}}
                    >
                    </input>
                    <Link
                        to="/"
                        onClick={!isFetching ? submitSearch : undefined}
                        className="search-button"
                        style={isDark ? {backgroundColor: '#4B4B4B', borderColor: '#4B4B4B'} : {}}
                    >
                        <img className="search-icon" src="../images/search.png"/>
                    </Link>
                </div>
                <Link onClick={resetMovieResults} to="/watchlist">
                    <img className={isDark ? "watchlist-icon inverted-icon" : "watchlist-icon"} src="../images/watchlistIcon.png"/>
                </Link>
            </div>
            <div 
                onClick={toggleColorMode} 
                className="color-mode-toggler"
                style={isDark ? {borderColor: 'white'} : {}}
            >
                <img 
                    className={isDark ? "color-mode-icon inverted-icon" : "color-mode-icon"} 
                    src={isDark ? "../images/toggleLight.png" : "../images/toggleDark.png"}
                />
                
            </div>
        </div>
    )
}

export default Header