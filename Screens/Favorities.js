import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MealCollection from '../Components/MealCollection';
import {MEALS} from '../Data/dummydata';

const Favorities = props =>{
    const favMeals = MEALS.filter(meals => meals.id==='m1'||meals.id==='m2')
    return(
        <MealCollection ListData={favMeals} navigation={props.navigation}/>
    );
}


export default Favorities;
