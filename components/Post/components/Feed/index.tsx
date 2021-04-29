import React from 'react';
import { Image, View, FlatList } from 'react-native';

import Stories from '../../../Stories';
import Post from '../..';
import styles from './styles';

const data = [
    {
        user:{
          imageUri: 'https://www.matichon.co.th/wp-content/uploads/2018/12/%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%A301.jpg',
          name: 'Ake Thanathorn',
          id: 4,
        },
        idpost: 3,
        imageUri:"https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.6435-9/115721514_215086813460922_4094219759240667070_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=9hq0l-nzcXkAX93bvfN&_nc_ht=scontent.fbkk22-6.fna&oh=db91653fa14554bf6bdabce08d7a92fd&oe=60B0E057",
        caption: 'คุณถามมา เรามีคำตอบ!!! #ก้าวหน้า',
        likescount: '1674',
        postedAt: '10 minutes ago',
        
    },
    {
        user:{
          imageUri: 'https://www.matichon.co.th/wp-content/uploads/2018/12/%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%A301.jpg',
          name: 'Thu Prayut',
          id: 4,
        },
        idpost: 2,
        imageUri:"https://medias.thansettakij.com/images/2019/12/03/1575431525.jpg",
        caption: 'เราทำงานทุกวัน นะจ๊ะ #รัฐบาลไทย',
        likescount: '584',
        postedAt: '5 hours ago',
        
    },
    {
        user:{
          imageUri: 'https://siamrath.co.th/files/styles/1140/public/img/20190603/b9a9a79adad431c491158f3627b6706b97848f03b471f4c4e0265a506382778b.jpg?itok=v_qzozeL',
          name: 'Mark Apisit',
          id: 4,
        },
        idpost: 1,
        imageUri:"https://teen.mthai.com/app/uploads/2017/05/%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87-%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B0-o%E0%B8%B2.jpg",
        caption: 'เรียนจบแล้ว ชีวิตพึ่งเริ่มต้นนะลูกสาว..',
        likescount: '7503',
        postedAt: '2 days ago',
    },
]

const Feed = () =>{
    // console.log(data);
    
    return (
        <FlatList
            data={data}
            keyExtractor={({imageUri})=>imageUri}
            renderItem={({item}) => <Post postdetail={item}/>}
            ListHeaderComponent={Stories}
        />
    )
}

export default Feed;