import React, {Component} from 'react';
import DataService from '../../services/data-service';
import {connect} from 'react-redux';
import ProductItem from '../product-item/product-item';
import s from './home-page.module.scss';

class HomePage extends Component {
    dataService = new DataService();
    state = {
        products: [],
        loading: true
    };

    componentDidMount() {
        this.dataService.getProducts()
            .then(data => this.setState((state) => state.products = data))
            .catch(error => {
                console.log(error)
            });
    };

    productsListRender = () => {
        return this.state.products.map((item) => {
            const itemCount = this.props.cart.find(i => i.id === item.id);
            const favoritesItem = this.props.favorites.find(i => i.id === item.id);

            return (
                <div className={s.homePageItemWrap} key={item.id} >
                    <ProductItem
                        className={s.homePageProductItem}
                        item={item}
                        itemCount={itemCount}
                        favoritesItem={favoritesItem}
                    />
                </div>
            )
        })};

    render() {
        return (
            <div
                className={s.homePage}
            >
                {this.productsListRender()}
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        cart: props.products.cart,
        favorites: props.products.favorites
    }
};

export default connect(mapStateToProps)(HomePage);