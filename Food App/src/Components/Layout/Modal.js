import Cart from '../Cart/Cart';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import Card from '../UI/Card/Card';
import OrderForm from '../Orders/OrderForm';
import { useState } from 'react';

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onCancel}></div>;

const ModalOverlay = (props) => <Card className={classes.modal}><Cart onCancel={props.onCancel} onOrder={props.onOrder}/></Card>

const OrderOverlay = () => <Card className={classes.modal}><OrderForm /></Card>

const Modal = (props) => {
    const portal = document.getElementById('modal-overlay');

    const [clicked, setClicked]  = useState(false);

    const orderHandler = () => setClicked(true);

    return <>
        {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}/>, portal)}
        {!clicked && ReactDOM.createPortal(<ModalOverlay onCancel={props.onCancel} onOrder={orderHandler}/>, portal)}
        {clicked && ReactDOM.createPortal(<OrderOverlay />, portal)}
    </>
}
export default Modal;