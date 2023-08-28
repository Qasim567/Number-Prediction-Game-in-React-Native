import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    return (
        <Pressable style={styles.container}
            android_ripple={{ color: '640233' }}
            onPress={onPress}>
            <View>
                <Text style={styles.btntxt}>{children}</Text>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4
    },
    btntxt: {
        color: 'white',
        textAlign: 'center'
    }
});
export default PrimaryButton;