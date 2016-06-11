import React, { Component } from 'react';
import { StyleSheet, NavigationExperimental, View } from 'react-native';

import mockData from '../mockData';
import Messages from '../components/Messages';

const { Header } = NavigationExperimental;

class Chat extends Component {
  static title = () => 'Chat';

  render() {
    return (
      <View style={styles.view}>
        <Messages user={mockData.user} channel={mockData.channels[0]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: Header.HEIGHT,
  },
});

export default Chat;
