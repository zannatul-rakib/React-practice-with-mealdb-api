import React, { useEffect, useState } from 'react';
import "./Meals.css"
import { ImSearch } from "react-icons/im";
import MealDetail from '../MealDetail/MealDetail';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/localStorage';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart)
        addToDb(meal.idMeal)
    }
    
    return (
        <div className='container'>
            <div className="meals">
                <div className="search-box">
                    <input type="search" />
                    <button><ImSearch/></button>
                </div>
                <div className="meals-container">
                    {
                        meals.map(meal => <MealDetail meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart} />)
                    }
                </div>
            </div>
            <div className="meals-cart">
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Meals;