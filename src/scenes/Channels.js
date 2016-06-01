import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default () => (
  <ScrollView style={styles.scrollView}>
    <Text>Hello world!</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 64,
  },
});
