import React from 'react';
import "./MealDetail.css"
import {BsCart} from "react-icons/bs";

const MealDetail = (props) => {
    const { strMeal, strMealThumb, strArea, strCategory, strInstructions } = props.meal;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='meal-card'>
            <div className="img-box">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="meal-detail">
                <h3>{strMeal}</h3>
                <div className="sub-title">
                    <p>Area: {strArea}</p>
                    <span><small>category: {strCategory}</small></span>
                   <button onClick={() => handleAddToCart(props.meal)}>Add to cart <BsCart/></button>
                </div>
                
            </div>
        </div>
    );
};

export default MealDetail;