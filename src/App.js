import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import { About, AuthWrapper, Cart, Checkout, Home, Products, SingleProductPage, PrivateRoute, Error } from "./pages";

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route exact path='/products'>
                        <Products />
                    </Route>
                    <Route path='/products/:id' children={<SingleProductPage />} />
                    <PrivateRoute path='/checkout'>
                        <Checkout />
                    </PrivateRoute>
                    <Route path='*'>
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </AuthWrapper>
    );
}

export default App;
