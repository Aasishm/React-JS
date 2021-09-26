import { useContext } from 'react';
import AuthContext from '../../context-api';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const ctx = useContext(AuthContext);
    const total = ctx.mealsArray.reduce( (current, meal) => current + meal.Amount, 0);


    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {total}
        </span>
    </button>
}
export default HeaderCartButton;