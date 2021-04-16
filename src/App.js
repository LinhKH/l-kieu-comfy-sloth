import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { About, AuthWrapper, Home, Products } from "./pages";

function App() {
    return (
        // <AuthWrapper>
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route exact path='/products'>
                        <Products />
                    </Route>
                </Switch>
            </Router>
        // </AuthWrapper>
    );
}

export default App;
