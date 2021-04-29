import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; 
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = (DataimageUri: any) =>{
    // console.log(DataimageUri);
    
    return (
        <View style={styles.container}>

            <View style={styles.left}>
                <ProfilePicture uri={DataimageUri.DataimageUri} size={40}/>
                <Text style={styles.name}>{DataimageUri.name}</Text>
            </View>

            <View style={styles.right}>
                <Icon name="dots-three-horizontal" size={15}/>
            </View>
            
        </View>
    )
}

export default Header;