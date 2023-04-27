import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'
const Confirm = (props) => {
  return (
    <Backdrop onClick={props.onCancel} className={classes.confirmouter}>
        <div className={classes.confirm}>
            <span className={classes.confirmtext}>确定清空购物车吗</span>
            <div >
                <button onClick={(e)=>{props.onCancel(e)}} className={classes.cancel}>取消</button>
                <button onClick={(e)=>{props.onOk(e)}} className={classes.ok}>确定</button>
            </div>
        </div>
    </Backdrop>
  )
}

export default Confirm