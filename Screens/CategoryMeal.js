import React from 'react';
import {CATEGORIES, MEALS} from '../Data/dummydata';
import MealList from '../Components/MealList';
import MealCollection from '../Components/MealCollection';

const CategoryMeal = props =>{
    const {categoryid, categoryname} = props.route.params;
    
    const displayMealIteam = MEALS.filter(meal=>meal.categoryids.indexOf(categoryid)>=0);
    
   return (

    <MealCollection ListData={displayMealIteam} navigation={props.navigation}/>
   );
    
};



export default CategoryMeal
