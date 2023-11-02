import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.color1,
        padding:10,
        alignItems: 'center'
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        marginTop:40,
    }
})