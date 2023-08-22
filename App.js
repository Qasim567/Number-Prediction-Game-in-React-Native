import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground 
        source={require('./assets/download.jpg')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
  

});
