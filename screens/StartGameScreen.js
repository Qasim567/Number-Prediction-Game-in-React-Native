import {TextInput,View,StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){
    return(
        <View style={styles.inputcontainer}>
            <TextInput style={styles.textinput}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}/>
        <View style={styles.btncontainer}>
            <View style={styles.innerbtncontainer}>
            <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.innerbtncontainer}>
            <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
        </View>
    );
}
export default StartGameScreen;

const styles=StyleSheet.create({
    inputcontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        padding:16,
        marginHorizontal:24,
        backgroundColor:'#4e0329',
        elevation:4,
        borderRadius:8
    },
    textinput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    btncontainer:{
        flexDirection:'row'
    },
    innerbtncontainer:{
        flex:1
    }

});