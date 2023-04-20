import React from "react";
import {View, Text, StyleSheet, SafeAreaView,ImageBackground, StatusBar} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconText from "../iconText";




const City = () => { 
    const {container, cityBackGround, country, center, city, Zurich, population, sun, riseAndSet} = styles
    return (
        <SafeAreaView style = {container}>
            <ImageBackground
            source={{uri: 'https://cdn.pixabay.com/photo/2019/11/19/07/50/bridge-4636745_960_720.jpg'}}
            style = {cityBackGround}
            >
            <View style={center}>
                <Text style = {country}>Switzerland</Text>
                <View style = {city}>
                    <Text style = {Zurich}>Zurich</Text>
                    <FontAwesome5 name ='city' size = {30} color={'black'}/>
                </View>
                <Text style={population}>402 762 people live in Zurich</Text>
            </View>
                <IconText iconName ={'sunrise'} iconSize={40} iconColor = {'white'}bodyTextStyles = {riseAndSet}bodyText = {'sunrise 06:35'} viewStyles = {sun}/>
                <IconText iconName ={'sunrise'} iconSize={40} iconColor = {'white'}bodyTextStyles = {riseAndSet} bodyText = {'sunrise 06:35'} viewStyles ={sun} />
            </ImageBackground>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight ||0, 
        backgroundColor: 'blue',
    },
    center:{
        alignItems: 'center'
    },
    cityBackGround: {
        flex: 1
    },
    country: {
        color: 'maroon',
        fontSize: 50,
        fontWeight: 'bold'
    },
    sun:{
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        marginEnd: 30   
    },
    riseAndSet:{
        fontSize: 20,
        paddingRight: 10,
        marginLeft: 15,
        color: 'navy',
    },
    city: {
        flexDirection: 'row'
    },
    Zurich:{
        fontSize: 30,
        color: 'darkslategrey',
        fontWeight: 'bold',
        marginRight : 10,
        paddingBottom: 40,
    },
    population: {
        color: 'black',
        fontSize: 20
    }
})

export default City 


