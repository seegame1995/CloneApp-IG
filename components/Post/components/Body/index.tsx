import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Body = (DataimageUri: any) =>{
    
    return (
        <Image source={{ uri: DataimageUri.DataimageUri }} style={styles.image}/>
    )
}

export default Body;