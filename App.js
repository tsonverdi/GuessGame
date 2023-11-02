import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import colors from './constants/colors';
import gameRules from './constants/game-rules';
import GameScreen from './screens/GameScreen';
import SummaryScreen from './screens/SummaryScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import GameContext from './store';

const Stack = createNativeStackNavigator();
export default function App() {
  const [gameResult, setGameResult] = useState(""); //win lost
  const [shotCount, setShotCount] = useState(gameRules.totalShot);
  const [randomNumber, setRandomNumber] = useState("");
  const [timer, setTimer] = useState(gameRules.totalTime);
  const [point, setPoint] = useState(0)
  
  const contextValues = {gameResult,setGameResult,shotCount,setShotCount,randomNumber,setRandomNumber,timer,setTimer,point,setPoint}
  return (
    <GameContext.Provider value={contextValues}>
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerStyle: styles.header, headerTintColor:"black", headerTitleAlign: "center"}}>
        <Stack.Screen name="Welcome" options={{title:"Welcome to the Game"}} component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="Game" options={{title:"Guess the Number"}} component={GameScreen}></Stack.Screen>
        <Stack.Screen name="Summary" options={{title:"Summary"}} component={SummaryScreen}></Stack.Screen>
        
      </Stack.Navigator>
    {/* <View style={styles.container}>

      {gameStatus === "welcome" ? <WelcomeScreen setgameStatus={setgameStatus}/> 
      : gameStatus === "game" ? <GameScreen setPoint={setPoint} timer={timer} setTimer={setTimer} shotCount={shotCount} setShotCount={setShotCount} setgameStatus={setgameStatus} setGameResult={setGameResult} randomNumber={randomNumber} setRandomNumber={setRandomNumber}/> 
      : <SummaryScreen randomNumber={randomNumber} point={point} timer={timer} shotCount={shotCount} setgameStatus={setgameStatus} gameResult={gameResult}/>}

      
      
     
    </View> */}
    </NavigationContainer>
    <Toast/>
    </GameContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    
  },
  header:{
  backgroundColor: colors.color1,
  padding:10,
  alignItems: 'center'}
});
