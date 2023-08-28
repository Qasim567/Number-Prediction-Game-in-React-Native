import {Text,View,StyleSheet,Image} from 'react-native'
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
function GameOverScreen({ usernumber, roundsNumber, onStartNewGame }){
    return(
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imgcontainer}>
            <Image style={styles.img}
            source={require('../assets/images.jpg')}/>
            </View>
            <Text style={styles.maintxt}>Your Phone needed <Text style={styles.innertext}>{roundsNumber}</Text> attempts to guess the number <Text style={styles.innertext}>{usernumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imgcontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        overflow:'hidden',
        margin:36,
    },
    img:{
        width:'100%',
        height:'100%'
    },
    maintxt:{
        fontSize:20
    },
    innertext:{
        fontWeight:'bold',
        color:'#4e0329'
    },
});
export default GameOverScreen;