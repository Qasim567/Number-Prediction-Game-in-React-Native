import {Text,View,StyleSheet} from 'react-native'

function GuessRound({roundNumber,guess}){
    return(
        <View style={styles.listItem}>
                <Text style={styles.itemtxt}>#{roundNumber}</Text>
                <Text style={styles.itemtxt}>Opponent's Guess: {guess}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        backgroundColor:'#ddb52f'
    },
});
export default GuessRound;