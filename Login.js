import { View,StyleSheet,Text, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import background from './images/foodbackground.jpg';
import logo from './images/food.jpg';
import React, {Component } from 'react';
//import * as firebase from 'react-native-firebase';
//import { firebaseConfig } from './firebase';

const { width: WIDTH } = Dimensions.get('window');

 //Firebase.initializeApp(firebaseConfig);


export default class Login extends Component {

    constructor(props) {
        super(props)
this.state={

    uname: ' ',
    Password: ' '
}
    }

   
   validate_field=()=>
   {
        const {uname,Password}=this.state;
        if( uname==" ")
        {
            alert("Please Fill UserName");
            return false
        } else if (Password==" ")
        {
            alert("Please Fill Password");
            return false
        } 
            return true
        
    }

    making_api_call=()=>
    {
        if(this.validate_field())
        {
            
           this.props.navigation.navigate('Home',{P1:this.state.uname});
           // P1 is a parameter/Variable
        }
    }

    Registration_Here=()=>
    {
this.props.navigation.navigate('Registration');
    }
    

  /*/  componentDidMount(){
      const myuser=  firebase.database().ref("user");
       myuser.on("value",datasnap=>{
           console.log(datasnap.val())
       })
        }*/
    render() {
       

        return (
<ImageBackground source={background} style={styles.backgroundcontainer}>
<View style={styles.logocontainer}>
    <Image source={logo} style={styles.logo}/>
</View>

<View style={styles.inputcontainer}>

    <TextInput
     style={styles.input}
     placeholder={'Please enter Username'}
     onChangeText={(Value)=> this.setState({uname: Value})}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    underlineColorAndroid= 'transparent' ></TextInput>
</View>
<View style={styles.inputcontainer}>
    <TextInput
     style={styles.input}
     onChangeText={(Value)=> this.setState({Password: Value})}
     placeholder={'Please enter Password'}
     secureTextEntry={true}
     keyboardType="numeric"
     maxLength={5}
    placeholderTextColor={'rgba(255,255,255,0.7)'}
    underlineColorAndroid= 'transparent' ></TextInput>
</View>
<View>
<TouchableOpacity style={styles.btn} onPress={this.Registration_Here}>
<Text style={styles.textbtn}>Registration_Here</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style={styles.btn} onPress={this.making_api_call} >
<Text style={styles.textbtn}>LOGIN/SIGNIN</Text>
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
        borderColor: 'red',margin:20,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'yellow',
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
