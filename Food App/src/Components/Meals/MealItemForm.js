import { useState } from 'react';
import Input from '../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const [amount, setAmount] = useState();

    const inputHandler = (event) => setAmount(event.target.value);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSave(amount);
        setAmount('');
    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input value={amount || ''} asp={{
          id: "amount_"+props.id,
          label: "Amount",
          type: "number",
          min: '0',
          onChange: inputHandler
        }}
      />
        <button type="submit">+Add</button>
    </form>
}
export default MealItemForm;