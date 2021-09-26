import { useContext } from 'react';
import AuthContext from '../../context-api';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const ctx = useContext(AuthContext);
    const addMealHandler = (item) => ctx.addItem(item, true);
    const removeMealHandler = (item) => ctx.removeItem(item);

    let total_price = 0;

    return <div className={classes['cart-items']}>
        {
        ctx.mealsArray.map(meal => {
            total_price += meal.Price * meal.Amount;
            return <CartItem 
            key={Math.random()*100} 
            name={meal.Name} 
            amount={meal.Amount} 
            price={meal.Price} 
            onAdd = {() => addMealHandler(meal)}
            onRemove = {() => removeMealHandler(meal)}/>
        })
        }
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${total_price.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCancel}>Cancel</button>
            <button className={classes['button']} onClick={props.onOrder}>Order</button>
        </div>
    </div>
}

export default Cart;