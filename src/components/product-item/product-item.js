import React from 'react';
import {connect} from 'react-redux';
import s from './product-item.module.scss';
import {ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART, REVERSE_FAVORITES} from '../../actions/actions';


const ProductItem = ({item, itemCount, addToCart, removeFromCart, deleteFromCart, reverseFavorites, favoritesItem, path}) => {

    const {productImage, title, infoText, price} = item;
    let subtotalPrice = item && item.count * item.price;

    const favoriteActiveStyle = {
        color: '#e62e02'
    };

    return (
        <div className={s.productItem}>
            <img className={s.productItemImage}
                 src={productImage}
                 alt={title}
            />
            <div className={s.productItemAttributes}>
                <p className={s.productItemTitle}>{title}</p>
                <p className={s.productItemInfoText}>{infoText}</p>
                <div className={s.productItemPrice}>
                    <p>US ${price}</p>
                    {path === "/cart-page" &&
                        <span className={s.productItemPriceSubtotal}>
                            Subtotal: US ${subtotalPrice}
                        </span>
                    }
                </div>
                <div className={s.productItemChoose}>
                    <div className={s.productItemWrap}>
                        <div className={s.productItemCart}>
                            <div className={s.productItemCartTitle}>Add to cart</div>
                            <div className={s.productItemCartAttributes}>
                                <button className={s.productItemRemoveFromCart}
                                        disabled={itemCount ? itemCount.count === 0 : !itemCount}
                                        onClick={() => {removeFromCart(item)}}>
                                    -
                                </button>
                                <p>{itemCount ? itemCount.count : 0}</p>
                                <button className={s.productItemAddToCart}
                                        onClick={() => {addToCart(item)}}>
                                    +
                                </button>
                            </div>
                        </div>
                        <p className={s.productItemAddToFavorites}
                           style={favoritesItem ? favoriteActiveStyle : null}
                           onClick={() => {reverseFavorites(item)}}>
                            <i className={`material-icons ${s.productItemFavoritesIcon}`}>favorite</i>
                            {favoritesItem ? `Remove from Favorites` : `Add to Favorites`}
                        </p>
                    </div>
                    {path === "/cart-page" &&
                        <i className={`material-icons ${s.productItemDeleteIcon}`}
                           onClick={() => {deleteFromCart(item)}}
                        >
                            delete
                        </i>
                    }
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    addToCart: ADD_TO_CART,
    removeFromCart: REMOVE_FROM_CART,
    deleteFromCart: DELETE_FROM_CART,
    reverseFavorites: REVERSE_FAVORITES
};

export default connect(null, mapDispatchToProps)(ProductItem);