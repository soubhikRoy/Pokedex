import React, { useReducer } from 'react';

const INITIAL_STATE = {
    inventory: [
        { id: 1, itemName: 'biscuit', price: 70 },
        { id: 2, itemName: 'detergent', price: 140 },
        { id: 3, itemName: 'oil', price: 160 },
        { id: 4, itemName: 'eggs', price: 50 },
    ],
    cart: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
        default:
            return state;
    }
}

function BigBasket() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id: Math.random(), itemName: item.itemName, price: item.price } });
    };

    const removeFromCart = (item) => {
        // Check if the item exists in the cart before removing
        const itemInCart = state.cart.find((cartItem) => cartItem.itemName === item.itemName);
        if (itemInCart) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: itemInCart });
        }
    };

    return (
        <div>
            <h1>Big Basket</h1>
            <h2>Inventory</h2>
            <ul>
                {state.inventory.map((item) => (
                    <li key={item.id}>
                        Item: {item.itemName} Price: {item.price}
                        <button onClick={() => addToCart(item)}>+</button>
                        <button onClick={() => removeFromCart(item)}>-</button>
                    </li>
                ))}
            </ul>
            <h2>Your Cart</h2>
            <ul>
                {state.cart.map((item) => (
                    <li key={item.id}>
                        Item: {item.itemName} Price: {item.price}
                        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Total</h2>
            <p>
                Total: {state.cart.reduce((total, item) => total + item.price, 0)}
            </p>
        </div>
    );
}

export default BigBasket;