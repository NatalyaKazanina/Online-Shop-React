import React from 'react';
import ProductItem from '../product-item/product-item';
import {connect} from 'react-redux';
import s from './favorites-page.module.scss'


const FavoritesPage = (props) => {

    const favoritesListRender = () => {
        return props.favorites && props.favorites.map((item) => {
            const itemCount = props.cart.find(i => i.id === item.id);

            return (
                <div className={s.favoritesPageItemWrap}
                     key={item.id}>
                    {
                        <ProductItem
                            item={item}
                            itemCount={itemCount}
                            favoritesItem={item}
                        />
                    }
                </div>
            )
        })
    };

    return (
        <div className={s.favoritesPage}>
            {favoritesListRender()}
        </div>
    )
};

const mapStateToProps = (props) => {
    return {
        favorites: props.products.favorites,
        cart: props.products.cart
    }
};

export default connect(mapStateToProps)(FavoritesPage);