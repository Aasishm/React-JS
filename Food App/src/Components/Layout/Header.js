import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import meals from './meals.jpg'

const Header = (props) => {

    return <>
        <header className={classes.header}>
            <h2>Malayali Cuisine</h2>
            <HeaderCartButton onClick={props.onClick}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="Delicious meals"/>
        </div>
    </>
}

export default Header;