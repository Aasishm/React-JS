import React, { useState } from 'react';

const AuthContext = React.createContext(
    {
        mealsArray: [],
        addItem: (item, flag) => {},
        removeItem: (item) => {}
    }
);

export const AuthContextProvider = (props) => {

    const [mealsArray, setArray] = useState([]);

    const removeItemHandler = (mealitem) => {
      mealsArray.forEach(meal => {
        if(meal.Name === mealitem.Name && meal.Amount > 0){
          meal.Amount--;
          setArray(prev => [...prev]);
        }
      })
    }

    const addToCartHandler = (mealitem, flag) => {
        mealsArray.forEach(meal => {
          if(meal.Name === mealitem.Name){
            if(flag) meal.Amount++;
            else {
              meal.Amount += mealitem.Amount;
              mealitem.Amount = 0;
            }
          }
        });
        if(mealitem.Amount !== 0 && !flag) setArray(prev => [mealitem, ...prev]);
        else setArray(prev => [...prev]);
      }

    return <AuthContext.Provider value={{
        mealsArray: mealsArray,
        addItem: addToCartHandler,
        removeItem: removeItemHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;