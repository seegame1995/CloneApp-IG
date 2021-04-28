import React from 'react';
import { View, Text } from '../Themed';
import ProfilePicture from '../ProfilePicture';
import styles from '../Story/styles';

const Story = (DataimageUri:any, name:string) =>{
    // console.log(DataimageUri);
    
    return (
        <View style={styles.container}>
            <ProfilePicture uri={DataimageUri.imageUri}/>
            <Text style={styles.name}>{DataimageUri.name}</Text>
        </View> 
    )
}

export default Story;