import React from 'react';
import "./MealDetail.css"
import {BsArrowRight} from "react-icons/bs";

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
                    <p>{strInstructions.slice(0, 200)}... <a onClick={() => handleAddToCart(props.meal)}>Read More<BsArrowRight /></a></p>
                </div>
                
            </div>
        </div>
    );
};

export default MealDetail;