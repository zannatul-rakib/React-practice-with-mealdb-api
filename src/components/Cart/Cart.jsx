import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    let foodName = <li></li>;
    for (const food of cart) {
        foodName = food.strMeal;
    }
    return (
        <div className='cart'>
            <h3>Add Cart</h3>
            <p>Selected Food: { cart.length}</p>
            <table>
                <tr>
                    <th>Food Name</th>
                    <th>Quantity</th>
                </tr>
           </table>
        </div>
    );
};

export default Cart;