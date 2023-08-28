import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, FlatList, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Title from '../components/Title';
import GuessNumber from '../components/GuessNumber';
import PrimaryButton from '../components/PrimaryButton';
import GuessRound from '../components/GuessRound';

function randomnumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return randomnumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxBoundary=100
let minBoundary=1

function GameScreen({usernumber,ongameover}) {
  const initialGuess = randomnumber(
    1, 
    100, 
    usernumber
    );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [totalroundguess, settotalroundguess] = useState([initialGuess]);
  useEffect(()=>{
    if (currentGuess === usernumber){
      ongameover(totalroundguess.length);
    }

  },[currentGuess,usernumber,ongameover])

  function nextguess(direction){
    if(
      (direction === 'lower' && currentGuess<usernumber) ||
      (direction === 'greater' && currentGuess>usernumber)
    ){
      Alert.alert("Don't lie!", "You provided incorrect information.", [
        {text: 'Sorry' ,styles: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower'){
      maxBoundary = currentGuess;
    }
    else
    {
      minBoundary = currentGuess + 1;
    }

  const newRndnumber = randomnumber(
    minBoundary,
    maxBoundary,
    currentGuess
  );
   setCurrentGuess(newRndnumber)
   settotalroundguess(prevguessround=>[newRndnumber, ...prevguessround])  
}
const guesslengthlist=totalroundguess.length

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{currentGuess}</GuessNumber>
      <View style={styles.innercontainer}>
        <Text style={styles.txt}>Higher or lower?</Text>
          <View style={styles.btn}>
          <View style={styles.btnview}>
          <PrimaryButton onPress={nextguess.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color='white'/>
          </PrimaryButton>
          </View>
          <View style={styles.btnview}>
          <PrimaryButton onPress={nextguess.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color='white'/>
          </PrimaryButton>
          </View>
          </View>   
      </View>
       <FlatList
       data={totalroundguess}
       renderItem={(itemData)=>(
       <GuessRound 
        roundNumber={guesslengthlist - itemData.index} 
        guess={itemData.item}
        />
       )}
       keyExtractor={(item)=>item}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: 10,
  },
  innercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: '#4e0329',
    elevation: 4,
    borderRadius: 8
},
  txt:{
    textAlign:'center',
    fontSize:20,
    color:'#ddb52f'
  },
  btn:{
    flexDirection:'row', 
    marginTop:5
  },
  btnview:{
    flex:1
  }
});

export default GameScreen;
