import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const MealList = props =>{
    return (
    <View >     
    <TouchableOpacity style={styles.Container} onPress = {props.selectRecipe}>    
        <View>
            <View style={{...styles.rowAlignment,...styles.Header}}>
                <ImageBackground source={{url:props.imageURL}} style={styles.BGimg}>
                    <View style={styles.TitleContainer}> 
                    <Text style = {styles.Title}>{props.title}</Text> 
                    </View>
                 </ImageBackground>
            </View>
            <View style={{...styles.rowAlignment,...styles.detailPart}}>
                 <Text>{props.duration} minutes</Text>
                 <Text>{props.affordability}</Text>
                 <Text>{props.complexibility}</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    rowAlignment:{
        flexDirection:'row'
    },
    Container:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10,
    },
    Header:
    {
        height:'85%'
    },
    detailPart:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    BGimg:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    },
    TitleContainer:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        paddingHorizontal:12,
        paddingVertical:5,
    },
    Title:{
        fontSize:20,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
    }


});

export default MealList;