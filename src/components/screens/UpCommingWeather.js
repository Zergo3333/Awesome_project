import React from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native'
import ListItem from '../ListItem'


const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 12:00:00",
    main: {
        temp_max: 8.55,
        temp_min: 7.55
    },
    weather: [
        {
            main: 'Clear'
        }
    ]
    },
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    }
]

  
  const UpCommingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem dt_txt = {item.dt_txt} min = {item.main.temp_min} max = {item.main.temp_max}/>
    )
    const {container, imageBackground} = styles
    return (
        <SafeAreaView style = {container}>
            <ImageBackground 
            source={{uri: 'https://cdn.pixabay.com/photo/2018/04/05/23/30/sky-3294543_960_720.jpg'}}
            style={imageBackground}>
                <FlatList
                data = {DATA}
                renderItem= {renderItem}
                ItemSeparatorComponent={() => <View style = {{backgroundColor: 'ghostwhite', height: 5, borderWidth:1}}/>}
                />
            </ImageBackground>
        </SafeAreaView>
    )
  }

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    imageBackground:{
        flex:1
    }
})

export default UpCommingWeather