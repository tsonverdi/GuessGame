import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Card from '../components/common/card'
import IconButton from '../components/common/icon-button'
import Spacer from '../components/common/spacer'
import colors from '../constants/colors'
import gameRules from '../constants/game-rules'
import GameContext from '../store'
import { useNavigation } from '@react-navigation/native'

const SummaryScreen = () => {
  const context = useContext(GameContext);
  const navigation = useNavigation();

  const {shotCount,randomNumber,timer,point,gameResult,setTimer}= context;
  
  restartGame = () => {
    setTimer(gameRules.totalTime);
    navigation.navigate("Game")
  }
  return (
    <View style={{flex:1}}>
      {/* <Header title="Summary"/> */}

      <View style={styles.content}>
        
        {gameResult === "win" ? <Text style={styles.title}>You WIN</Text> :  <Text style={styles.title}>You LOST</Text>}  
        
        <Card style={{alignItems: 'center'}}>
          <Text style={{fontSize:30,fontWeight: 'bold'}}>{point}</Text>
          <Text style={{fontSize:18}}>Point</Text>
        </Card>

        <Text style={{fontWeight: 'bold'}}>Summary</Text>
        <Text>The Number was : {randomNumber}</Text>
        <Text>Left Time : {timer}/{gameRules.totalTime}</Text>
        <Text>Left Shot : {shotCount}/{gameRules.totalShot}</Text>

        <Spacer/>

        <IconButton title="Play Again" style={{backgroundColor:"blue"}} textStyle={{color:colors.color4}} onPress={restartGame}/>

      </View>
    </View>
  )
}

export default SummaryScreen

const styles = StyleSheet.create({
  content:{
    justifyContent:"center",
    alignItems: "center",
    flex:1,
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
  }
})