import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = props.price.toFixed(2);

    const addMealItem = (amount) => {
        
        props.addMealItem(
        {
            Name: props.name,
            Amount: parseInt(amount, 10),
            Price: price
        });       
    }

    return <div className={classes.meal}>
            <section>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>${price}</div>  
            </section>    
                <MealItemForm onSave={addMealItem}/>
            </div>
}
export default MealItem;
