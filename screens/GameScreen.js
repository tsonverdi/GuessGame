import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState,useEffect, useContext } from 'react'
import IconButton from '../components/common/icon-button'
import Header from '../components/common/header'
import Card from '../components/common/card'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import Spacer from '../components/common/spacer'
import colors from '../constants/colors'
import gameRules from '../constants/game-rules'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import GameContext from '../store'

const GameScreen = () => {
  const context = useContext(GameContext);
  const navigation = useNavigation();

  const {setGameResult,shotCount,setShotCount,randomNumber,setRandomNumber,timer,setTimer,setPoint} = context;
  const [number, setnumber] = useState("");

   useFocusEffect(React.useCallback(
    () => {
      setTimer(gameRules.totalTime)
      setShotCount(gameRules.totalShot)
      setPoint(0)
  //rastgele bir sayi olusturulmasi
  const rn = 
  Math.floor(Math.random() * (gameRules.randomNumberUpLimit - gameRules.randomNumberDownLimit) + 1)
  setRandomNumber(rn);
  console.log(rn)
 

  const interval = setInterval(()=> {
    setTimer((prev) => prev - 1)
  },1000);

  return () => {
      clearInterval(interval)
       }
    },[],
    )
);

  useEffect(() => {
    if(timer<=0){
     endGame("lost")
    }
  
    return () => {
    }
  }, [timer]);
  
  const guess = () => { 

    //can azaltma
    if(shotCount > 0){//can kontrolu
    
    if(number.length === 0){//tahmin bos mu kontrol
      Toast.show({
        
        text1: "Tahmin kismi bos birakilamaz",position:"bottom"
        
      })
    }else{
      if(number == randomNumber){//kazaninca direkt summarye
        //puan hesaplama 
        endGame("win")
      }
      else{

        if (number< randomNumber){
          Toast.show({
            text1: "Daha buyuk bir tahmin yap",position:"bottom"
          })
        }else{
          Toast.show({
            style:'error',
            text1: "Daha kucuk bir tahmin yap",
            position:"bottom"
          })
        }
        setShotCount(shotCount-1);//can azaltma
        
      }
  
      //inputu Temizle
      setnumber("");
  
    }
    
    }else{//can bitti ise direkt summarye
      setShotCount(0)//geride kaldigi icin yaptik
      endGame("lost")
    }

    
  }
  const endGame = (result) => { //oyun bitimi icin bir metot heryerde kullan
    setGameResult(result);
    //setgameStatus("summary")
    setPoint(timer * shotCount)
    navigation.navigate("Summary")
   }
  return (
    <View>
      {/* <Header title="Guess the Number"/> */}
      <Spacer/>
      <View style={styles.cardsLine} gap={20}>
      <Card>
        <View style={{flexDirection:"row",justifyContent: "center",alignItems: "center",margin:20}}>
        <Icon size={30} name="timer-outline"/>
        <Text style={{fontSize:30}}>{timer}</Text>
        {/* direkt buraya timer i verdik */}
        </View>
      </Card>
      
      <Card>
        <View style={{flexDirection:"row",justifyContent: "center",alignItems: "center",margin:20}}>
        <Icon size={30} name="heart"/>
        <Text style={{fontSize:30}}>{shotCount}</Text>
        </View>
      </Card>
      </View>
      <Spacer/>

      <Card style={{marginHorizontal:20}}>
        <Text style={{textAlign: "center"}}>Select A Number</Text>
        <TextInput style={styles.textInput}
        value={number}
        onChangeText={(text) =>setnumber(text)}
        keyboardType='phone-pad'
        onSubmitEditing={guess}/>
        {/* ok tusuna basınca dırek gonderıyor */}
        <Spacer/>
        <IconButton title="Guess" onPress={guess} style={{backgroundColor:colors.color1}} textStyle={{fontWeight:"bold"}}/>
      </Card>


      {/* <IconButton title="Geri" onPress={() =>setgameStatus("welcome")}/> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    cardsLine:{
        flexDirection:"row",
        justifyContent:"center",
    },
    textInput:{
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      fontSize:24,
      padding:10,
    }
})