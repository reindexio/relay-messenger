import React, { PropTypes } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
const { CardStack } = NavigationExperimental;

import scenes from './scenes';

const emptyFunction = () => {};

export default class Navigator extends React.Component {
  static propTypes = {
    navigationState: PropTypes.object.isRequired,
    onNavigationChange: PropTypes.func.isRequired,
  };
  onPushRoute = (...args) => {
    this.props.onNavigationChange('push', ...args);
  };
  onPopRoute = (...args) => {
    this.props.onNavigationChange('pop', ...args);
  };
  renderScene = (sceneProps) => {
    const Scene = scenes[sceneProps.scene.route.key];
    return (
      <Scene
        route={sceneProps.scene.route}
        onPushRoute={this.onPushRoute}
        onPopRoute={this.onPopRoute} />
    );
  };

  render() {
    // TODO(hedger): prop `onNavigate` will be deprecated soon. For now,
    // use `emptyFunction` as a placeholder.
    return (
      <CardStack
        onNavigate={emptyFunction}
        onNavigateBack={this.onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this.renderScene}
        style={styles.navigator} />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
