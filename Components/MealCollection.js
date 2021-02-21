import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import MealList from '../Components/MealList';

const MealCollection = props => {
    const renderMealData = dataItem => {
        return(
            <MealList 
            title={dataItem.item.title} 
            duration={dataItem.item.duration}
            affordability={dataItem.item.affordability}
            complexibility = {dataItem.item.complexibility}
            imageURL = {dataItem.item.imgURL}
            selectRecipe = {()=>{
                props.navigation.navigate('Meal Detail', {MealId: dataItem.item.id, MealTitle: dataItem.item.title})
            }}
            />
        );
    }

    return(
        <View style={styles.Container}>

        <FlatList data={props.ListData} renderItem={renderMealData}  style={{ width: '100%' }}/>
    </View>  
    );
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }

});

export default MealCollection;