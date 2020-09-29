import React, { Component } from 'react';  
import {View,Text,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';  
import {Card} from'react-native-paper';



export default class DisplayAnImage extends Component {  
     
     constructor(props){
          super(props);
          this.state={
               category:[
                    {
                         id:'1',
                         name:"CRIPSY MASALA DOSA",
                        src:require('./images/MasalaDosa.jpg')
                        
                    },
                    {
                         id: '2',
                         name: 'Open-Faced Pizza Burgers',
                         src:require('./images/PizzaBurger.jpg')
                       },
                       {
                         id: '3',
                         name: 'Medu Vada',
                         src:require('./images/vadda.jpg')
                       },
                       {
                         id: '4',
                         name: 'FROZEN FRUIT SMOOTHIE',
                         src:require('./images/smoothie.jpg')
                       }
               ]
          }
     }

     Registration_Here=(item)=>
     {
 this.props.navigation.navigate('Indegredients',{id:item.id});
     }  

     render(){   
        
                return(
           
          <View style={{flex:1,padding:10}}>
          <FlatList 
          data={this.state.category}
          renderItem={({item})=> 
          <Card style={{margin:5,backgroundColor:"yellow",borderRadius:10}}>
           <View style={{flex:1,flexDirection:"row",padding:10,marginLeft:20}}>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.name}</Text>
          <Image  source={item.src} style={{width:150,height:150}} />
          <TouchableOpacity style={styles.btn} onPress={this.Registration_Here} >
<Text style={styles.textbtn}>View Details</Text>
</TouchableOpacity>
          </View>    
          </Card>
            }
           keyExtractor={item=>item.id}
          />
          </View>
     
        )
   }
}
const styles=StyleSheet.create({
    
       
    btn : {
        width: 100,
        height: 60,
        borderRadius: 5,
        fontSize: 16,
       backgroundColor:'orange',
       justifyContent:'center',
        marginTop: 20,
        borderColor:"red",
    },
    textbtn : {
        color:'blue',
        fontSize: 20, 
        fontWeight: '500',
        marginTop: 10,
       opacity: 0.5,
       textAlign:'center'
       }
})

 