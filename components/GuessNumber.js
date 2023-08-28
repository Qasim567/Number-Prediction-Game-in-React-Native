import {Text,View,StyleSheet} from 'react-native'

function GuessNumber({children}){
    return(
        <View style={styles.container}>
                <Text style={styles.number}>{children}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        borderColor:'#ddb52f',
        borderWidth:4,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center'
    },
    number:{
        color:'#ddb52f',
        fontSize:36,
        fontWeight:'bold'
    }

});

export default GuessNumber;