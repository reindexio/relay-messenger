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

import Channel from './src/components/Channel';

const user = {
  id: 10,
  name: 'Hello',
  image: 'http://placekitten.com/150/150',
};

const channel = {
  name: 'Hello Hackathon!',
  messages: {
    edges: [{
      node: {
        date: new Date(2000, 1, 1),
        id: 0,
        text: 'Hello',
        sender: user,
      },
    }, {
      node: {
        date: new Date(2001, 1, 1),
        id: 1,
        text: 'World',
        sender: {
          id: 11,
          name: 'World',
          image: 'http://placekitten.com/150/150',
        },
      },
    }],
  },
};

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Channel channel={channel} user={user} />
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
