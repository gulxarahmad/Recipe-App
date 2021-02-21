import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../Data/dummydata';
import CategoryGrid from '../Components/CetegoryGrid';


const CategoryScreens = props =>{
    const renderGridItem = (itemData) => {
        return (
            <CategoryGrid Color={itemData.item.color} title={itemData.item.title} onSelect = {()=>{props.navigation.navigate('Meals List', {categoryid:itemData.item.id, categoryname:itemData.item.title})}}/>
        );
    }
    return(
        <FlatList keyExtractor={(item, index) => item.id} numColumns = {2} data={CATEGORIES} renderItem={renderGridItem} />
    );
};

CategoryScreens.navigationOptions = {
    headerStyle:{
        backgroundColor:'red',
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    },



});

export default CategoryScreens
