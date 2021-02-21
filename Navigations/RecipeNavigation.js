import React from 'react';
import {Platform, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import  {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';


import CategoryScreens from '../Screens/CategoryScreens';
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetail from '../Screens/MealDetail';
import Favorities from '../Screens/Favorities'; 
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';

const stack = createStackNavigator()
const stack1 = createStackNavigator()
const Tabs = Platform.OS === 'android'? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const myTheme = {
  headerStyle:{backgroundColor: Platform.OS ==='android' ? 'blue':'white'}, headerTintColor: Platform.OS ==='android'?'white':'blue'
}

const RecipeNav = () =>(
  <stack.Navigator screenOptions={{headerStyle:{backgroundColor: Platform.OS ==='android' ? 'blue':'white'}, headerTintColor: Platform.OS ==='android'?'white':'blue'}}>
        <stack.Screen name= "My Categories" component={CategoryScreens} options={{title:'My Categories' }}/>
        <stack.Screen name= "Meals List" component={CategoryMeal} options = {({route})=>({title:route.params.categoryname })}/>
        <stack.Screen name= "Meal Detail" component={MealDetail} options = {({route})=>({title:route.params.MealTitle, headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
             <Item iconName = 'ios-star' title='Favorite' onPress={()=>{
              <HeaderButton color={Platform.OS === 'android' ? 'red':'black'} />
             }}/>   
            </HeaderButtons>
        )})}/>
    </stack.Navigator> 

);
const FavNav =() =>(
  <stack.Navigator screenOptions={{headerStyle:{backgroundColor: Platform.OS ==='android' ? 'blue':'white'}, headerTintColor: Platform.OS ==='android'?'white':'blue'}}>
  <stack.Screen name= "Favorities" component={Favorities} options={{title:'My Favorities' }}/>
  <stack.Screen name= "Meal Detail" component={MealDetail} options = {({route})=>({title:route.params.MealTitle, headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
             <Item iconName = 'ios-star' title='Favorite' onPress={()=>{
              <HeaderButton color={Platform.OS === 'android' ? 'red':'black'} />
             }}/>   
            </HeaderButtons>
        )})}/>
</stack.Navigator>  
)
const TabsNav =()=> (
  <NavigationContainer>
    <Tabs.Navigator
    screenOptions = {({route})=> ({
      tabBarIcon: ({focused, size, color}) => {
        let icoonName;
        if (route.name == "Meals"){
          icoonName = focused ? 'home'
          : 'home-outline';
        }
        else if (route.name == "Favorities"){
          icoonName = focused ? 'ios-star':'ios-star-outline'
        }
        return <Ionicons name={icoonName} size={size} color={color} />;
      },
    })
  }
  initialRouteName = "Meals"
  shifting={true}
    tabBarOptions= {{activeTintColor:'white', inactiveTintColor:'blue', activeBackgroundColor:'blue', inactiveBackgroundColor:'white',}}
    >
          <Tabs.Screen name="Meals" component={RecipeNav}options={{tabBarColor:'blue'}}/>
          <Tabs.Screen name = "Favorities" component = {FavNav} options={{tabBarColor:'black'}}/>
      </Tabs.Navigator>
    </NavigationContainer>

);
export default TabsNav;
