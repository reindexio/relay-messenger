import React, { AppRegistry } from 'react-native';
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
