import { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

function StartGameScreen({ onpick }) {
    const [enteredtext, setenteredtext] = useState('');

    function inputhandler(entered) {
        setenteredtext(entered)
    }

    function resetinputhandler() {
        setenteredtext('')
    }

    function confirminputhandler() {
        const num = parseInt(enteredtext)

        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', styles: 'destructive', onPress: resetinputhandler }]
            );
            return
        }
        onpick(num)
    }
    return (
        
            <View style={styles.container}>
                <Title>Guess My Number</Title>           
            <View style={styles.inputcontainer}>
            <Text style={styles.txt}>Enter a Number</Text>
                <TextInput style={styles.textinput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={inputhandler}
                    value={enteredtext} />
                <View style={styles.btncontainer}>
                    <View style={styles.innerbtncontainer}>
                        <PrimaryButton onPress={resetinputhandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.innerbtncontainer}>
                        <PrimaryButton onPress={confirminputhandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,     
        padding: 20,
        marginTop:30
      },
    inputcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        elevation: 4,
        borderRadius: 8
    },
    textinput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txt:{
        textAlign:'center',
        fontSize:25,
        color:'#ddb52f'
      },
    btncontainer: {
        flexDirection: 'row'
    },
    innerbtncontainer: {
        flex: 1
    }

});
export default StartGameScreen;