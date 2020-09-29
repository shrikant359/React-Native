import React, {Component } from 'react';
import { View,Text,StyleSheet,ImageBackground} from 'react-native';
import { createAppContainer} from 'react-navigation';
import background from './images/back4.jpg';
import Category from'./Category';
import * as Animatable from 'react-native-animatable';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LogOut from'./Login';
import Indegredients from './Indegredients';

class HomePage extends Component {

    render(){
        return (
    
            <ImageBackground source={background} style={styles.backgroundcontainer}>
            <View style={styles.container}>
        <Animatable.Text style={styles.text} animation="zoomInDown" duration={9000} delay={5000}>Welcome to Home Page! Mr.{this.props.navigation.state.params.P1}</Animatable.Text>
        <Animatable.Image style={styles.image} source={require("./images/ck.jpg")} animation="fadeInLeftBig" duration={9000} delay={5000} easing="ease-out-circ"   iterationCount={100} ></Animatable.Image>
        <Animatable.Image style={styles.image} source={require("./images/vadda.jpg")} animation="fadeInRightBig" duration={9000} delay={5000}  easing="ease-out-circ" iterationCount={100} ></Animatable.Image>
        <Animatable.Image style={styles.image} source={require("./images/PizzaBurger.jpg")} animation="fadeInLeftBig" duration={9000} delay={5000} easing="ease-out-circ"   iterationCount={100} ></Animatable.Image>
        <Animatable.Image style={styles.image} source={require("./images/MasalaDosa.jpg")} animation="fadeInRightBig" duration={9000} delay={5000}  easing="ease-out-circ" iterationCount={100} ></Animatable.Image>
           
            </View>
                </ImageBackground>
               
        );

    }
}


const TabDrawerNavigation=createDrawerNavigator({

    Home: {
        screen: HomePage,
    navigationOptions: 
        {
        tabBarLabel:'Home',
        title:'Home'
        }
    },
    Category: {
        screen: Category,
    navigationOptions: 
        {
            title:'Category',
       tabBarLabel:'Category'
        
    }
  },
  LogOut: {
    screen: LogOut,
navigationOptions: 
    {
        title:'LogOut',
   tabBarLabel:'LogOut'
    
   }
}

    });

 
 const AppContainer = createAppContainer(TabDrawerNavigation);
  export default AppContainer;
  



const styles=StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems:'stretch'
    },
    text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 40
    },
    backgroundcontainer: {
        flex: 1,
        justifyContent:'center',
        width:null,
        height:null,
        alignItems:'center'
    },
    image :{
       width:250,
        height:120,
        borderRadius:5,
        borderColor:"green",
       borderWidth: 2,
       resizeMode:'stretch',
       marginLeft: 60
    }
})