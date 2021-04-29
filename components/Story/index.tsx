import React from 'react';
import { View, Text } from '../Themed';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = (DataimageUri:any) =>{
    //console.log(DataimageUri);
    
    return (
        <View style={styles.container}>
            <ProfilePicture uri={DataimageUri.imageUri} size={60}/>
            <Text style={styles.name}>{DataimageUri.name}</Text>
        </View> 
    )
}

export default Story;