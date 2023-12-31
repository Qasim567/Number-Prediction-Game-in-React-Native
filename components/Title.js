import{Text,View,StyleSheet} from 'react-native'

function Title({children}){
    return(
            <Text style={styles.title}>{children}</Text>
    );
}


const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        borderColor:'white',
        borderWidth:2,
        padding:12,
        textAlign:'center'
    }

});
export default Title;