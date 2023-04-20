import React from "react"
import CurrentWeather from "./src/components/screens/currentWeather"
import UpCommingWeather from "./src/components/screens/UpCommingWeather"
import City from "./src/components/screens/City"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feather from 'react-native-vector-icons/Feather'
import { ImageBackgroundComponent } from "react-native"

const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle:{
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato'
        }
      }}>
          <Tab.Screen name = {'Current'}
           component={CurrentWeather}
           options = {{tabBarIcon: ({focused}) => (<Feather name = {'droplet'} 
           size = {25}
           color = {focused? 'tomato': 'black'}/>)}}
           />
          <Tab.Screen name = {'Upcomming'} component ={UpCommingWeather} options = {{tabBarIcon: ({focused}) => (<Feather name ={'clock'} size ={25} color = {focused? 'tomato': 'black'}/>)}} />
          <Tab.Screen name = {'City'} component={City} options = {{tabBarIcon: ({focused}) => (<Feather name={'home'} size={25} color ={focused? 'tomato': 'black'}/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


 export default App


 