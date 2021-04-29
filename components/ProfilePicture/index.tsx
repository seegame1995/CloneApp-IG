import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const ProfilePicture = (dataUri:any) =>{
    // console.log(size);
    // console.log(dataUri);
    return (
        <View style={[styles.container, {width: dataUri.size+6, height: dataUri.size+6}]}>
            <Image 
                source={{ uri: dataUri.uri }}
                style={[styles.Image, {width: dataUri.size, height: dataUri.size}]} 
            />
        </View>
    )
}

export default ProfilePicture;