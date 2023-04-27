import React from 'react'
import Counter from '../../../UI/Counter/Counter'
import classes from './Checkoutitem.module.css'
const Checkoutitem = (props) => {
  return (
    <div className={classes.Checkoutitem}>
        <div className={classes.MealImg}>
                <img src={props.meal.img}/>
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <div className={classes.PriceOuter}>
                    <Counter meal={props.meal}/>
                    <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
    </div>
  )
}

export default Checkoutitem