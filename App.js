import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import RecipeNav from './Navigations/RecipeNavigation';

export default function App() {

  const [loaded] = useFonts({
    font1: require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
     <RecipeNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
