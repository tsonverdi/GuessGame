import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/common/header'
import gameRules from '../constants/game-rules'
import Spacer from '../components/common/spacer'
import IconButton from '../components/common/icon-button'
import colors from '../constants/colors'
import {useNavigation} from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation();
  //const [gameStatus, setgameStatus] = useState("welcome");

  return (
    <View style={styles.container}>
      {/* <Header title={"WELCOME"}/> */}

      <View style={styles.content}>
      <Text style={[styles.text, {fontWeight:"bold"}]}>Welcome to the Game</Text>
      <Text style={styles.text}>Guess the number between{" "}
      {gameRules.randomNumberDownLimit}-{gameRules.randomNumberUpLimit}{" "} 
      in {gameRules.totalTime} seconds and{" "}
      you have {gameRules.totalShot} shows</Text>
    <Spacer/>
    <IconButton style={{backgroundColor:colors.color1}} title="Start Game" 
    icon="play" 
    
    
    onPress={()=>//setgameStatus("game") 
      navigation.navigate("Game")
  }/>
    
    </View>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        textAlign:"center"

    },
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:40,
        
    }
    
})