import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Footer = (Datapost:any) =>{

    const [isLiked, setIsLike] = useState(false);

    const onLikePressed = () => {
        setIsLike(!isLiked);
    }

    return (
        <View style={styles.container}>

            <View style={styles.iconscontainer}>
                <View style={styles.lefticons}>

                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <ADIcon name="heart" size={25} color={"#C30000"}/>
                            :
                            <ADIcon name="hearto" size={25} color={"#545454"}/>
                        }
                        
                    </TouchableWithoutFeedback>

                    <FontistoIcon name="comment" size={23} color={"#545454"}/>
                    <IoniconsIcon name="paper-plane-outline" size={25} color={"#545454"}/>
                </View>
                <View style={styles.righticon}>
                    <FAIcon name="bookmark-o" size={25} color={"#545454"}/>
                </View>
            </View>
            

            <Text style={styles.likes}>{Datapost.Datapost.likescount} Likes</Text>
            <Text style={styles.caption}>{Datapost.Datapost.caption}</Text>
            <Text style={styles.postedAt}>{Datapost.Datapost.postedAt}</Text>

        </View>
    )
}

export default Footer;