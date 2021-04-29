import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left:{
        flexDirection: 'row',
    },
    right:{
        marginRight: 10,
    },
    name:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    }
});

export default styles;