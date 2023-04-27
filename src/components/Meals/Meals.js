import React from 'react'
import Meal from './Meal/Meal.js'
import classes from './Meals.module.css';
const Meals = (props) => {
  return (

      /*现在将滚动条设置给了Meals*/
      <div className={classes.Meals}>
          {props.mealsData.map(item =>
              <Meal
                  key={item.id}
                  meal={item}
              />
          )}
      </div>
  );
};

export default Meals;