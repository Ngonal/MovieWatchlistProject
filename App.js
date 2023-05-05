import React from "react"
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import SearchPage from "./pages/SearchPage"
import WatchlistPage from "./pages/WatchlistPage"
import {Context} from "./Context"

function App() {
    
    const {isDark} = React.useContext(Context)
    
    return (
        <div 
            style={!isDark ?
                {backgroundImage: "url(https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?w=826&t=st=1683147823~exp=1683148423~hmac=607946120543b550bdcb4f58450502305d9fbbf7f9908e63cc1e805d0a405e7b)"} : undefined
            }
            className="app"
        >
            
            
            <div className="main">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <SearchPage />
                    </Route>
                    <Route exact path="/watchlist">
                        <WatchlistPage />
                    </Route>
                </Switch>
            </div>
            
            <footer id="dev-credit" style={isDark ? {backgroundColor: "#121212"} : {}}>
                <div className="dev-credit-section">
                    <h2 style={isDark ? {color: "white"} : {}}id="developed-by">Developed by: </h2>
                    <div id="dev-name">
                        <h2 style={isDark ? {color: "white"} : {}} id="ngonal">Ngonal</h2>
                    </div>
                </div>
                
                <div className="dev-credit-section">
                    <div className="dev-logo">
                        <img src="./images/credits/github.png" id="github" className={isDark ? "inverted-icon" : undefined}/>
                    </div>
                    <div className="dev-logo">
                        <img src="./images/credits/linkedin.png" id="linkedin" className={isDark ? "inverted-icon" : undefined}/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App