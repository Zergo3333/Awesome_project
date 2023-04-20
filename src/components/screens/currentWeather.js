import React from "react";
import {Text,StyleSheet,SafeAreaView,View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { weatherType } from "../../utilities/weatherTypes";

const CurrentWeather = () =>{
  const {wrapper, container, current, temp, feels, highLowWrapper, high, bodyWrapper, description, message} = styles
  return(
    <SafeAreaView style ={wrapper}>
      <View style = {container}>
        <Feather name= "sun" size={70} color = "black" />
        <Text style = {current}>Current temperature</Text>
        <Text style = {temp}>6</Text>
        <Text style = {feels}>Feels like 5</Text>
        <View style = {highLowWrapper}>
          <Text style = {high}>High 8</Text>
          <Text style = {high}> Low 6</Text>
        </View>
      </View>
      <View style = {bodyWrapper}>
        <Text style = {description}>It's sunny</Text>
        <Text style = {message}>{weatherType['Thunderstorm'].message}</Text>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: 'pink'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center'
  
  },
  temp: {
    fontSize: 50,
    color: 'black'
  },
  current:{
    fontSize: 20,
    color: 'black'
  },
  feels:{
    color: 'black',
    fontSize: 20
  },
  high:{
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  description:{
    fontSize: 48,
    color: 'black'
  },
  message:{
    fontSize: 30,
    color: 'black'
  }

})

export default CurrentWeather






