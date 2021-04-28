import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Stories from '../components/Stories';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
