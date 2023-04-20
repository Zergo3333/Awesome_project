import React from "react";
import { Text, StyleSheet, View} from "react-native";
import Feather from 'react-native-vector-icons/Feather'

const ListItem = (props) => {
    const {dt_txt, min, max} = props
    const {item, temp, date} = styles
    return (
        <View style = {item}>
            <Feather name = {'sun'} size = {50} color = {'white'}/>
            <Text style = {date}>{dt_txt}</Text>
            <Text style ={temp }>{min}</Text>
            <Text style = {temp}>{max}</Text>
        </View>
  
    )
  }


  const styles = StyleSheet.create ({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'plum',
        borderRadius:15
    },
    temp: {
        color: 'ghostwhite',
        fontSize: 20    
    },
    date:{
        color: 'ghostwhite',
        fontSize: 15
    }
})

export default ListItem


  