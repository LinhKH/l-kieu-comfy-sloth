import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { About, AuthWrapper, Home } from "./pages";

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
                </Switch>
            </Router>
        // </AuthWrapper>
    );
}

export default App;
