import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import styles from './styles';

const Post = (postdetail:any) =>{
    return (
        <View style={styles.container}>
            <Header DataimageUri={postdetail.postdetail.user.imageUri} name={postdetail.postdetail.user.name}/>
            <Body DataimageUri={postdetail.postdetail.imageUri}/>
            <Footer Datapost={postdetail.postdetail}/>
        </View>
    )
}

export default Post;