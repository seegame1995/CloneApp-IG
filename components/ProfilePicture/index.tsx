import React from 'react';
import { Image } from 'react-native';
import { View } from '../Themed';
import styles from './styles';

const ProfilePicture = (dataUri:any) =>{

    // console.log(dataUri.uri);
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: dataUri.uri }}
                style={styles.Image} 
            />
        </View>
    )
}

export default ProfilePicture;