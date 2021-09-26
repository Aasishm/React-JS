import classes from './OrderForm.module.css';
import Button from '../UI/Button/Button';

const OrderForm = () => {
    return( 
        <form>
            <div className={classes['form-control']}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes['form-control']}>
                <label htmlFor="address">Address</label>
                <textarea id="address" cols="50"/>
            </div>
            <div className={classes['form-control']}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className={classes['form-control']}>
                <label htmlFor="zip">Postal Code</label>
                <input type="number" id="zip" />
            </div>
            <div className={classes['form-actions']}>
                <Button >Confirm</Button>
            </div>
        </form>
    )
}

export default OrderForm;