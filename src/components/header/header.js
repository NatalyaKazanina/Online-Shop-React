import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.scss'

const Header = () => {

    return (
        <div className={s.header}>
            <h2>
                <NavLink to="/" className={s.headerLogo}>OnlineShop</NavLink>
            </h2>
            <div className={s.headerMenu}>
                <NavLink activeClassName={s.activeMenuItem} exact to='/'>
                    <i className={`material-icons ${s.headerMenuIcon}`}>
                       home
                    </i>
                </NavLink>
                <NavLink activeClassName={s.activeMenuItem} to='/cart-page/' className={s.headerMenuItem}>
                    <i className={`material-icons ${s.headerMenuIcon}`}>
                       shopping_cart
                    </i>
                    Cart
                </NavLink>
                <NavLink activeClassName={s.activeMenuItem} to='/favorites-page/' className={s.headerMenuItem}>
                    <i className={`material-icons ${s.headerMenuIcon}`}>
                       favorite_border
                    </i>
                    Favorites
                </NavLink>
            </div>
        </div>
    )
};

export default Header;