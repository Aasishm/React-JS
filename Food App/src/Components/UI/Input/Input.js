import classes from './Input.module.css'

const Input = (props) => {
    return <div className={classes.input}>
    <label htmlFor={props.asp.id}>{props.asp.label}</label>
    <input value={props.value} {...props.asp} />
  </div>
}

export default Input;