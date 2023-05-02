// use local storage to manage cart data
const addToDb = (id) => {
  let mealsCart = getMealsCart();

  // add quantity
  const quantity = mealsCart[id];
  if (!quantity) {
    mealsCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    mealsCart[id] = newQuantity;
  }

  localStorage.setItem("meals-cart", JSON.stringify(mealsCart));
};

// remove from db
const removeFromDb = (id) => {
  const mealsCart = getMealsCart();
  if (id in mealsCart) {
    delete mealsCart[id];
    localStorage.setItem("meals-cart", JSON.stringify(mealsCart));
  }
};

const getMealsCart = () => {
  let mealsCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("meals-cart");
  if (storedCart) {
    mealsCart = JSON.parse(storedCart);
  }

  return mealsCart;
};

const deleteMealsCart = () => {
  localStorage.removeItem("meals-cart");
};

// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

export { addToDb, removeFromDb, getMealsCart, deleteMealsCart };
