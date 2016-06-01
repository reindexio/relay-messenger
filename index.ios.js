/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RelayMessenger', () => Project);


/*
import React from 'react';
import { AppRegistry } from 'react-native';
import Relay from 'react-relay';
import Reindex from 'reindex-js';

import Channel from './src/components/Channel';
import config from './config';

const reindex = new Reindex(config.REINDEX_URL);
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer());

function RelayMessenger() {
  return <Channel />;
}

AppRegistry.registerComponent('RelayMessenger', () => RelayMessenger);
*/
