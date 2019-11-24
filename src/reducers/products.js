const updateCartItem = (cartItemUpdated, cartItem, cartItemIndex, state, action) => {
    if (cartItemUpdated && cartItemUpdated.count === 0) {
        return {
            ...state,
            cart: [
                ...state.cart.filter(i => cartItem.id !== i.id)
            ]
        }
    }
    if(!cartItem) {
        return {
            ...state,
            cart: [
                ...state.cart,
                {
                    ...action.item,
                    count: action.item.count + 1
                }
            ]
        }
    }
    return {
        ...state,
        cart: [
            ...state.cart.slice(0, cartItemIndex),
            cartItemUpdated,
            ...state.cart.slice(cartItemIndex + 1)
        ]
    }
};

const cartItemUpdate = (cartItem = {}, number) => {
    if(cartItem) {
        return {
            ...cartItem,
            count: cartItem.count + number
        }
    }
};

const orderManagement = (state, action, number) => {
    let cartItem = state.cart.find(i => i.id === action.item.id);
    let cartItemIndex = state.cart.findIndex(i => i.id === action.item.id);
    let cartItemUpdated = cartItemUpdate(cartItem, number);

    return updateCartItem(cartItemUpdated, cartItem, cartItemIndex, state, action);
};

const deleteFromCart = (state, action) => {
    return {
        ...state,
        cart: [
            ...state.cart.filter(i => action.item.id !== i.id)
        ]
    }
};

const initialState = {
    cart: [],
    favorites: []
};

const products = (state = initialState, action) => {

    let favoritesItem = state.favorites.find(i => i.id === action.item.id);
    let favoritesItemIndex = state.favorites.findIndex(i => i.id === action.item.id);

    switch (action.type) {
        case 'ADD_TO_CART':
            return orderManagement(state, action, 1);

        case 'REMOVE_FROM_CART':
            return orderManagement(state, action, -1);

        case 'DELETE_FROM_CART':
            return deleteFromCart(state, action);

        case 'REVERSE_FAVORITES':
            if(!favoritesItem) {
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        action.item
                    ]
                }
            }
            return {
                ...state,
                favorites: [
                    ...state.favorites.slice(0, favoritesItemIndex),
                    ...state.favorites.slice(favoritesItemIndex + 1)
                ]
            };

        default:
            return state;
    }
};

export default products;