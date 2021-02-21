import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native'

const CategoryGrid = props =>{
    let Touchablecmp = TouchableOpacity;
    if (Platform.OS ==='android' && Platform.Version>=21){
        Touchablecmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.Grid}>
        <Touchablecmp style={{flex:1}} onPress={props.onSelect}>    
        <View style={{...styles.Container, ...{backgroundColor:props.Color}}}>
            <Text style={styles.Title}>{props.title}</Text>
        </View>
        </Touchablecmp>
        </View>
    )


}

const styles = StyleSheet.create({
    Grid:{
        flex:1,
        margin:15,
        height:100,
        borderRadius:10,
        overflow:'hidden',
    },
    Container:{
        flex:1,
        shadowColor:'black',
        borderRadius:10,
        shadowOpacity:0.6,
        shadowRadius:10,
        shadowOffset:{width:0,height:2},
        elevation:3,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    Title:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'right'
    }
})

export default CategoryGrid;