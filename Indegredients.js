import React, { Component } from 'react';  
import {View,Text,FlatList} from 'react-native';  
import {Card} from'react-native-paper';



export default class Indegredients extends Component {  
     
     constructor(props){
          super(props);
          this.state={
               category:[
                    {
                         id:'1',
                         name:"CRIPSY MASALA DOSA",
                        method:" [Make the batter] 1- To a large bowl add sona masoori rice, idli rice, urad dal gota, chana dal, toor dal and methi seeds. 2- Rinse everything and soak in around 5 cups water for 5 to 6 hours. 3- Soak poha in 1/2 cup water 20 to 30 minutes before grinding the batter.  4- Drain water from the rice, dals & poha and transfer everything to a high speed blender. 5- Add around 1 & 1/4 cups (10 oz/300 ml) + 1-2 tablespoons (15-30 ml) cold water or as needed to grind the batter to a smooth paste (total water around 315-330 ml). 6- Now, transfer the batter to the steel bowl of your Instant Pot. 7- Add 1 teaspoon of rock salt (sendha namak) to the batter. Do not use regular iodine salt here. If you live in a warm place, you may skip the salt at this point. 8-Using your hands, mix the salt into the batter for 2 minutes. This helps in fermentation. 9- The consistency of the batter should be free flowing, but it shouldn’t be runny and it shouldn’t be thick either, a thick batter won’t ferment. 10- To use the Instant Pot to ferment the batter, place the batter into the steel container on the Instant Pot. 11- And then press the yogurt button. Set time to 8 to 9 hours in summer and 13 to 14 hours in winters. Cover the pot with a glass lid (do not use the IP lid here since the batter might over-ferment and that will block the lid). 12- After 14 hours, my batter was well fermented. It had increased in volume and was frothy on top. ",
                        method1:"[Make the potato masala] 13- Boil the potatoes and then peel the skin and mash them. You can boil the potatoes using an Instant Pot (high pressure 10 minutes) or 8-9 whistles on a stove-top pressure cooker. 14- Heat 1 tablespoon oil in a pan on medium heat. Once hot, add mustard seeds and let them pop. 15- Add hing and stir. 16- Add the chana dal (I usually soak it in water for 10 minutes, drain water and then use in the recipe), cashews and chopped ginger. 17- Then add the sliced onion, chopped green chilies and curry leaves. Cook the onions for around 2 minutes until soften. 18- Add the boiled and mashed potatoes along with turmeric and salt. Mix to combine everything. 19- If the masala is too dry, you can add few teaspoons of water here to make it a little water-y. I always add some. 20 Turn off heat, add some chopped cilantro and remove pan from heat.",
                        method2:"[Make the masala dosa] 21- Make the masala dosa 22- Then start making the dosa. Take a ladle full of batter and pour it in the center of the pan. 23 & 24- Start spreading the batter by moving your ladle in circular motion in one direction. 25- Start from the inside and move your ladle out in a circular motion (move the ladle in clockwise direction). 26 & 27- Keep moving the ladle in circular motion and spreading the batter until the batter is well spread. Try to spread it as thin as possible. 28- Drizzle oil or ghee all around the dosa and also in the center. Let the dosa cook for few minutes until the bottom starts appearing golden brown. You only need to cook one side of the dosa. 29- Add the prepared potato masala (few tablespoons of it) on one side if you wish to fold it or in the center if you want to roll the dosa. 30- Then scrape the sides of the dosa to release it from the pan. 31- Fold over one side of the dosa onto the side with the potato masala. If you put the masala in the center, then roll the dosa like you would roll a paper. 32- Press with a spatula and then remove dosa from the pan. Make all dosas in the same way. You will make around 12 to 15 dosa from the batter, more or less depending on how big or small you make them. ",
                        time:"12 to 14 hours"
                    },
                    {
                         id: '2',
                         name: 'Open-Faced Pizza Burgers',
                         method:" 1 small yellow onion, 4 English muffins, 1 tablespoon olive oil, 1 pound lean ground beef, 2 teaspoons Italian seasoning  ",
                         method1:"1/2 teaspoon garlic powder, 1 teaspoon kosher salt, 1/4 teaspoon freshly ground black pepper, 1 cup pizza or marinara sauce, 1 cup shredded low-moisture mozzarella cheese",
                         method2:"1- Arrange a rack 6 inches below the broiling element and heat the oven to 350ºF. Meanwhile, dice 1 small yellow onion. 2- Split 4 English muffins in half. Place cut-side up on a rimmed baking sheet. Toast in the oven until lightly browned, about 5 minutes. Set aside and set the oven to broil. 3- Heat 1 tablespoon olive oil in a large skillet over medium-high heat until shimmering. Add the onion and cook, stirring occasionally, until softened, about 5 minutes. Add 1 pound lean ground beef and 2 teaspoons Italian seasoning, 1/2 teaspoon garlic powder, 1 teaspoon kosher salt, and 1/4 teaspoon black pepper. Cook, breaking up the meat into smaller pieces with a wooden spoon, until browned, beginning to crisp, and cooked through, 5 to 7 minutes. 4- Stir in 1 cup pizza or marinara sauce and cook until slightly thickened, about 3 minutes. Divide the mixture between the English muffins. Sprinkle with 1 cup shredded mozzarella cheese. 5- Broil until the cheese is melted, 1 to 2 minutes.",
                         time:"Just 20 mins"
                       },
                       {
                         id: '3',
                         name: 'Medu Vada',
                         method:"2 cups of split urad daal, 1″ piece of finely chopped ginger, 2 tbsp of grated fresh coconut, 5 to 6 curry leaves (preferably chopped), 1 chopped green chili (optional), salt as per taste, Water as required, Vegetable or Canola oil for frying",
                         method1:"1- Soak urad daal for 2 hours. Rinse, clean and drain all the water. 2- Grind the urad daal with very little water. Add water only in sprinkles. Approximately less than 1/2 cup of water will be required. 3- Transfer the ground batter to a mixing bowl. 4- Add ginger, salt, chili, coconut and curry leaves and mix properly. 5- Set it aside for 30 minutes 6- Heat oil in a Kadhai or deep saucepan. 7- On a workable surface place a piece of Saran/plastic wrap.",
                         method2:"8- Apply oil all over the wrap. 9- Fill a pastry/piping bag with the batter 10- Cut the tip enough to get about 1/2″ size of vadas. 11- Carefully pipe the batter in circle like a donut (see the video below) 12- Apply some oil on your palm. 13- Carefully pick up the vadas and add it to the hot oil one at a time. 14- Fry it until it is golden brown. Remove and drain on paper towels. 15- Serve hot with sambhar and coconut chutney.",
                         time:" 1 hr"
                       },
                       {
                         id: '4',
                         name: 'FROZEN FRUIT SMOOTHIE',
                         method:"1 1/2 cups apple juice, 2 cups (assorted frozen fruit I used cherries, raspberries, blueberries and mango)",
                         method1:"3/4 cup vanilla Greek yogurt, additional fruit and/or mint sprigs for garnish (optional)",
                         method2:"1-Place the juice, fruit and yogurt in a blender. 2- Blend until completely smooth. 3- Pour into 2 glasses. Garnish with additional fruit and mint sprigs if desired.",
                         time:" just 6 mins"
                       }
               ]
          }
     }


     render(){   
        
                return(
           
          <View style={{flex:1,padding:10}}>
          <FlatList 
          data={this.state.category}
          renderItem={({item})=> 
          <Card style={{margin:5,backgroundColor:"green",borderRadius:10}} >
           <View style={{flex:1,flexDirection:"row",padding:10,marginLeft:20}}>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.name}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method1}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>{item.method2}</Text>
          < Text style={{flex:1,fontFamily:'Times New Roman',fontStyle:"italic",fontSize:20}}>Time:{item.time}</Text>
          </View>    
          </Card>
            }
           keyExtractor={item=>item.id}
          />
          </View>
     
        )
   }
}
