import React from 'react';
// import styles from './styles';
import Story from '../Story';
import { FlatList } from 'react-native';

const data = [
    {
        imageUri: 'https://mpics.mgronline.com/pics/Images/563000010329901.JPEG',
        name: 'ทักษิณ',
        id: 1,
    },
    {
        imageUri: 'https://media.thaigov.go.th/uploads/thumbnail/news/2020/04/IMG_28918_20200413104457000000.jpg',
        name: 'ประยุทธ์',
        id: 2,
    },
    {
        imageUri: 'https://siamrath.co.th/files/styles/1140/public/img/20190603/b9a9a79adad431c491158f3627b6706b97848f03b471f4c4e0265a506382778b.jpg?itok=v_qzozeL',
        name: 'อภิสิทธิ์',
        id: 3,
    },
    {
        imageUri: 'https://www.matichon.co.th/wp-content/uploads/2018/12/%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%A301.jpg',
        name: 'ธนาธร',
        id: 4,
    },
    {
        imageUri: 'https://mpics.mgronline.com/pics/Images/563000010329901.JPEG',
        name: 'ทักษิณ',
        id: 1,
    },
    {
        imageUri: 'https://media.thaigov.go.th/uploads/thumbnail/news/2020/04/IMG_28918_20200413104457000000.jpg',
        name: 'ประยุทธ์',
        id: 2,
    },
    {
        imageUri: 'https://siamrath.co.th/files/styles/1140/public/img/20190603/b9a9a79adad431c491158f3627b6706b97848f03b471f4c4e0265a506382778b.jpg?itok=v_qzozeL',
        name: 'อภิสิทธิ์',
        id: 3,
    },
    {
        imageUri: 'https://www.matichon.co.th/wp-content/uploads/2018/12/%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%A301.jpg',
        name: 'ธนาธร',
        id: 4,
    }
]

const Stories = () =>{
    
    return (
        <FlatList 
            data={data} 
            keyExtractor={({name})=>name}
            horizontal
            renderItem={({item})=> <Story imageUri={item.imageUri} name={item.name}/>}
        />
    )
}

export default Stories;