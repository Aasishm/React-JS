//import { DUMMY_MEALS as meals } from "./dummy-meals";
import MealItem from "./MealItem";
import classes from './Meals.module.css';
import Card from '../UI/Card/Card';
import { useEffect, useState, useContext } from "react";
import AuthContext from '../../context-api';

const Meals = () => {

    const url = 'https://react-api-96132-default-rtdb.firebaseio.com/meals/Meals.json';
    const [meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    const ctx = useContext(AuthContext);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(url);
            if(!response.ok) throw new Error('Oops!! Something was not  right!!');
            const temp = await response.json();
            setMeals(temp);
            setLoading(false);
            setError();
        }
        fetchMeals().catch(e => {
            setLoading(false);
            setError(e.message);
        });
    }, []);

    if(error) return <h2>{error}</h2>;

    return(
        <>
            {isLoading && <h2>Loading...</h2>}
            <Card className={classes.meals}>
                {meals.map(meal => 
                    <MealItem key = {meal.id} name={meal.name} desc={meal.description} price={meal.price} addMealItem={ctx.addItem} />)}
            </Card>
        </>
    );
}
export default Meals;