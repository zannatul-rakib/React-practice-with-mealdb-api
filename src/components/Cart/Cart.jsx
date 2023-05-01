import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h3>Add Cart</h3>
            <p>Selected Food: { cart.length}</p>
            <ul>
                {
                    cart?.map(data => <li key={data.idMeal}>{ data.strMeal}</li>)
               }
            </ul>
        </div>
    );
};

export default Cart;