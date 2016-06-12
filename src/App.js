import React, { Component } from 'react';
import Reindex from 'reindex-js';
import Relay from 'react-relay';
import { NavigationExperimental } from 'react-native';

import ChatListRoute from './routes/ChatListRoute';
import Navigator from './Navigator';
import config from '../config';
import { NavigatorContextType } from './PropTypes';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const reindex = new Reindex(config.reindexUrl);
reindex.setToken(config.reindexAnonymousToken);
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer());

export default class App extends Component {
  static childContextTypes = {
    navigator: NavigatorContextType,
  };

  constructor() {
    super();
    this.state = {
      navigationState: {
        index: 0,
        routes: [
          new ChatListRoute(),
        ],
      },
    };
    this.popRoute = this.popRoute.bind(this);
    this.pushRoute = this.pushRoute.bind(this);
  }

  getChildContext() {
    return {
      navigator: {
        pop: this.popRoute,
        push: this.pushRoute,
      },
    };
  }

  popRoute() {
    let { navigationState } = this.state;
    navigationState = NavigationStateUtils.pop(navigationState);
    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState });
    }
  }

  pushRoute(route) {
    let { navigationState } = this.state;
    navigationState = NavigationStateUtils.push(navigationState, route);
    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState });
    }
  }

  render() {
    return <Navigator navigationState={this.state.navigationState} />;
  }
}
