import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const MealDetail = props =>{
    const {MealId, MealTitle} = props.route.params;
    return(
        <View style={styles.Container}>
        </View>
    );

};


const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

});

export default MealDetail;
