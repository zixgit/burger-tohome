import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cart-context";
import Cartdetail from './Cartdetail/Cartdetail';
import Checkout from './Checkout/Checkout';
const Cart = () => {
    const ctx = useContext(CartContext);
    const [showdetail,setshowdetail]=useState(false);
    const [showcheckout, setshowcheckout] = useState(false)
    const showdetailhandler=() => { 
      if(ctx.totalAmount===0)return;
      setshowdetail(prevState=>!prevState);
     };
    const showcheckouthandler=() => { 
      if(ctx.totalAmount===0)return;
      setshowcheckout(true)
     }
    const closecheckouthandler=() => { setshowcheckout(false) }
  return (
    <div className={classes.cart} onClick={showdetailhandler}>
        <div className={classes.icon}>
            <img  src={iconImg} alt=''/>
            {ctx.totalAmount===0?null:<span className={classes.totalAmount}>{ctx.totalAmount}</span>}
            
        </div>
        {ctx.totalAmount===0? <p className={classes.nomeal}>未选购商品</p>: <p className={classes.price}>￥{ctx.totalPrice}</p>}
        <button onClick={showcheckouthandler} className={`${classes.button} ${ctx.totalAmount===0? classes.disabled:''}`}>点击结算</button>
        {showdetail&&<Cartdetail/>}
        {showcheckout && <Checkout onclose={closecheckouthandler}/>}
        
    </div>
    
  )
}

export default Cart;