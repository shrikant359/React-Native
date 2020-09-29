import React, {Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './HomePage';
import Registration from './RegistrationPage';
import Login from'./Login';
import Indegredients from './Indegredients';
import category from'./Category';
const screens={
  Login: {
    screen: Login
  },
  Home: {
     screen: Home
  },
  Registration: {
      screen: Registration
  },
  Indegredients: {
    screen: Indegredients
  },
  Category: {
    screen: category
  },
  Logout:{
    screen: Login
  }
}


const App=createStackNavigator (screens);

export default createAppContainer(App);