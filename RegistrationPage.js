import React, {Component } from 'react';
import { View,StyleSheet,Text, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import background from './images/menu.jpg';
import logo from './images/food.jpg';
//import * as firebase from 'react-native-firebase';
//import { firebaseConfig } from './firebase';

const { width: WIDTH } = Dimensions.get('window');

//Firebase.initializeApp(firebaseConfig);

export default class RegistrationPage extends Component {


    constructor(props)
    {
        super(props)
        this.state={
            name: ' ',
            email: ' ',
            username: ' ',
            password: ' ' 
        }
    }

    /*componentDidMount(){
      /*  const myuser=  firebase.database().ref("user");
         myuser.on("value",datasnap=>{
             console.log(datasnap.val())
        
         })
         this.authListener();

      }

      show(){
  
        firebase.auth().onAuthStateChanged((username)=> {
            if(username)
            {
this.setState({username})
            }
            else
            {
this.setState ({username :null})
            }
        })
      }*/
    validate_field=()=>{
        const { name,email,username,password }=this.state;
        if(name == ' ')
        {
            alert ("Please Enter your Full Name");
            return false
        } else if(email == ' '){
            alert("Please Enter your Email Id");
            return false
        }else if(username == ' '){
            alert("Please Enter your Username");
             return false
        }else if (password == ' '){
            alert("Please Enter your Password");
             return false
        }
        return true;
    }
    making_api_call=()=>
    {
        if(this.validate_field())
        {
            alert("Register Successfully");
           this.props.navigation.navigate('Login');
           // P1 is a parameter/Variable
        }
    }


    render (){
        return (
            <ImageBackground source={background} style={styles.backgroundcontainer}>
        
                <View style={styles.logocontainer}>
    <Image source={logo} style={styles.logo}/>
</View>
<View style={styles.inputcontainer}>

    <TextInput
     style={styles.input}
     placeholder={'Please enter full name'}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    onChangeText={(Value)=> this.setState({name: Value})}
    underlineColorAndroid= 'transparent'
  ></TextInput>
</View>
<View style={styles.inputcontainer}>

    <TextInput
     style={styles.input}
     placeholder={'Please enter email'}
     onChangeText={(Value)=> this.setState({email: Value})}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    underlineColorAndroid= 'transparent' ></TextInput>
</View>
<View style={styles.inputcontainer}>

    <TextInput
     style={styles.input}
     placeholder={'Please enter Username'}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    onChangeText={(Value)=> this.setState({username: Value})}
    underlineColorAndroid= 'transparent' ></TextInput>
</View>
<View style={styles.inputcontainer}>
    <TextInput
     style={styles.input}
     keyboardType="numeric"
     onChangeText={(Value)=> this.setState({password: Value})}
     maxLength={5}
     placeholder={'Please enter Password'}
     secureTextEntry={true}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    underlineColorAndroid= 'transparent' ></TextInput>
</View>
<View>
<TouchableOpacity style={styles.btn} onPress={this.making_api_call}>
<Text style={styles.textbtn}>Submit</Text>
</TouchableOpacity>
</View>

            </ImageBackground>
        );
    }
}

const styles=StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        justifyContent:'center',
        width:null,
        height:null,
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    logocontainer: {
        alignItems:'center',
        marginBottom: 50
    },
    text : {
         color:'white',
         fontSize: 20, 
         fontWeight: '500',
         marginTop: 10,
        opacity: 0.5,
        textAlign:'center'
        },
    logo: {
        width: 120,
        height: 120
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        borderWidth: 2,
        borderColor: 'yellow',margin:20,
        color: 'yellow',
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'white',
        marginHorizontal: 25
    },
    inputcontainer: {
marginTop: 10
    },
    btn : {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor:'green',
        justifyContent:'center',
        marginTop: 20
    },
    textbtn : {
        color:'yellow',
        fontSize: 20, 
        fontWeight: '500',
        marginTop: 10,
       opacity: 0.5,
       textAlign:'center'
       }
})
