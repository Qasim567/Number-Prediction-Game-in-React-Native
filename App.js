import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const[usernumber,setusernumber]=useState()
  const[gameover,setgameover]=useState(true)
  const[guessRounds,setguessRounds]=useState(0)

  function picknumberhandler(num){
    setusernumber(num)
    setgameover(false)
  }

  function gameoverhandler(numberRounds){
    setgameover(true)
    setguessRounds(numberRounds)
  }

  function startnewgame(){
    setusernumber(null)
    setguessRounds(0)
  }

  let screen=<StartGameScreen onpick={picknumberhandler}/>

  if(usernumber){
    screen=<GameScreen usernumber={usernumber} ongameover={gameoverhandler}/>
  }

  if(gameover && usernumber){
    screen=<GameOverScreen
    usernumber={usernumber}
    roundsNumber={guessRounds}
    onStartNewGame={startnewgame}/>
  }

  return (
    <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        source={require('./assets/download.jpg')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }


});
