import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext} from 'react'
import  ReactDOM  from 'react-dom'
import CartContext from '../../../store/cart-context'
import Bar from './Bar/Bar'
import classes from './Checkout.module.css'
import Checkoutitem from './Checkoutitem/Checkoutitem'

const checkoutroot=document.getElementById('checkout-root')

const Checkout = (props) => {
    const ctx = useContext(CartContext);
  return ReactDOM.createPortal(
    <div className={classes.checkout}>
        <div className={classes.close}>
            <FontAwesomeIcon onClick={() => props.onclose()} icon={faXmark} />
        </div>
        <div className={classes.MealDesc}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>商品详情</h2>
            </header>
            <div className={classes.Meals}>
                {ctx.items.map(item=><Checkoutitem key={item.id} meal={item}/>)}
                
            </div>
            <footer className={classes.footer}>
                <p>合计￥{`${ctx.totalPrice}`}</p>
            </footer>
        </div>
        <Bar totalPrice={ctx.totalPrice}/>
    </div>,checkoutroot
  )
}

export default Checkout