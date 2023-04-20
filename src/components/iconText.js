import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const IconText = (props) => {
    const {iconColor, iconName, iconSize, bodyText, bodyTextStyles, viewStyles } = props
    return (
    <View style = {viewStyles}>
        <Feather name={iconName} size={iconSize} color={iconColor} />
        <Text style={bodyTextStyles}>{bodyText}</Text>
    </View>
    )
}



export default IconText

