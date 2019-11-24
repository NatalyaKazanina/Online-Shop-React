import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import HomePage from '../home-page/home-page';
import CartPage from '../cart-page/cart-page';
import FavoritesPage from '../favorites-page/favorites-page';
import s from './app.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Router>
        <Header />
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/cart-page' component={CartPage} />
            <Route path='/favorites-page' component={FavoritesPage} />
            <Route render={() => <h2>Page note found</h2>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
