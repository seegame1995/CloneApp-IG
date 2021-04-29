import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Stories from '../components/Stories';
import Feed from '../components/Post/components/Feed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});
