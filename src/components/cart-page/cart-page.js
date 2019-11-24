import React from 'react';
import ProductItem from '../product-item/product-item';
import {connect} from 'react-redux';
import s from './cart-page.module.scss'

const CartPage = (props) => {

    let totalPrice = props.cart && props.cart.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue.price*currentvalue.count
    }, 0);

    const cartListRender = () => {

        return props.cart && props.cart.map((item) => {
            const itemCount = props.cart.find(i => i.id === item.id);
            const favoritesItem = props.favorites.find(i => i.id === item.id);

            return (
                    <ProductItem
                        key={item.id}
                        item={item}
                        itemCount={itemCount}
                        favoritesItem={favoritesItem}
                        path={props.match.path}
                    />
            )
        })
    };

    return (
        <div className={s.cartPage}>
            <div className={s.cartPageItemWrap}>
                {cartListRender()}
            </div>
            {props.cart.length > 0 &&
                <div className={s.cartPagePrice}>
                    <div>
                        Total price:* US ${totalPrice}
                    </div>
                </div>
            }
        </div>
    )
};

const mapStateToProps = (props) => {
    return {
        cart: props.products.cart,
        favorites: props.products.favorites
    }
};

export default connect(mapStateToProps)(CartPage);