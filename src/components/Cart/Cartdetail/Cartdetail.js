import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext,useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Meal from '../../Meals/Meal/Meal'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'
import classes from './Cartdetail.module.css'
import Confirm from '../../UI/Confirm/Confirm'
const Cartdetail = () => {
    const ctx=useContext(CartContext)
    const [showconfirm, setshowconfirm] = useState(false);
    const showconfirmhandler=() => { setshowconfirm(true) ;}
    const cancelhandler=(e) => { e.stopPropagation();setshowconfirm(false) ;}
    const okhandler=() => { ctx.clearcart(); };
    
  return (
       <Backdrop >
         {showconfirm && <Confirm onCancel={cancelhandler} onOk={okhandler}/>}
        
        <div className={classes.Cartdetail} onClick={e => e.stopPropagation()}>
          <header className={classes.header}> 
            <h2 className={classes.title}>商品详情</h2>
            <div onClick={showconfirmhandler} className={classes.trash}>
                <FontAwesomeIcon icon={faTrash}/>
                <span>清空购物车</span>
            </div>
          </header>
          <div className={classes.detail}>
            {ctx.items.map(item=><Meal noDesc key={item.id} meal={item}/>)}
          </div>
        </div>
       
    </Backdrop>
  )
}

export default Cartdetail