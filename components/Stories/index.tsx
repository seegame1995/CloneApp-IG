import React from 'react';
// import styles from './styles';
import Story from '../Story';
import { FlatList, View } from 'react-native';
import styles from './styles';

const data = [
    {
        imageUri: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.6435-9/164136378_4002770719780062_5939201861870460916_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=GWGmWyOcgOwAX-SI2L_&_nc_ht=scontent.fbkk22-1.fna&oh=8c66173d69378fb180cbfbe3eea05833&oe=60AD8DAD',
        name: '_c.game_',
        id: 0,
    },
    {
        imageUri: 'https://mpics.mgronline.com/pics/Images/563000010329901.JPEG',
        name: 'Meaw thaksin',
        id: 1,
    },
    {
        imageUri: 'https://media.thaigov.go.th/uploads/thumbnail/news/2020/04/IMG_28918_20200413104457000000.jpg',
        name: 'Thu Prayut',
        id: 2,
    },
    {
        imageUri: 'https://siamrath.co.th/files/styles/1140/public/img/20190603/b9a9a79adad431c491158f3627b6706b97848f03b471f4c4e0265a506382778b.jpg?itok=v_qzozeL',
        name: 'Mark Apisit',
        id: 3,
    },
    {
        imageUri: 'https://www.matichon.co.th/wp-content/uploads/2018/12/%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%A301.jpg',
        name: 'Ake Thanathorn',
        id: 4,
    }
]

const Stories = () =>{
    
    return (
        <View>
            <FlatList 
                data={data} 
                keyExtractor={({name})=>name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> <Story imageUri={item.imageUri} name={item.name}/>}
            />
            <View style={styles.container}></View>
        </View>
        
    )
}

export default Stories;