import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



const IconButton = (props) => {
    const buttonTitle = props.title;
    const buttonIcon = props.icon;
  return (
    <TouchableOpacity onPress={props.onPress}
    activeOpacity={props.activeOpacity}
    disabled={props.disabled}>
        <View style={[styles.container, props.style]}>
            <Icon style={styles.icon} name={buttonIcon}/>
            <Text style={[styles.text, props.textStyle]}>{buttonTitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent: "center",
        backgroundColor: "yellow",
        padding:10,
        alignItems: "center",
        borderRadius:5,
    },
    icon:{
        fontSize:20,
        marginRight:5,
    },
    text:{
        fontSize:20,
        color:"black",
    }
    

})