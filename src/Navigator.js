import React, { PropTypes } from 'react';
import {
  NavigationExperimental,
  StyleSheet,
} from 'react-native';
const { CardStack, Header } = NavigationExperimental;

import HeaderTitle from './components/HeaderTitle';
import scenes from './scenes';

const emptyFunction = () => {};

const getScene = (key) => {
  const scene = scenes[key];
  if (!scene) {
    throw new Error(`Scene '${key} does not exist.`);
  }
  return scene;
};

export default class Navigator extends React.Component {
  static propTypes = {
    navigationState: PropTypes.object.isRequired,
    onNavigationChange: PropTypes.func.isRequired,
  };
  onPushRoute = (route) => {
    this.props.onNavigationChange('push', route);
  };
  onPopRoute = () => {
    this.props.onNavigationChange('pop');
  };
  onNavigate = ({ type }) => {
    if (type === 'BackAction') {
      this.onPopRoute();
    }
  };
  renderTitle = (sceneProps) => {
    const scene = getScene(sceneProps.scene.route.key);
    return (
      <HeaderTitle>{scene.title()}</HeaderTitle>
    );
  };
  renderOverlay = (sceneProps) => (
    <Header
      {...sceneProps}
      onNavigate={this.onNavigate}
      renderTitleComponent={this.renderTitle} />
  );
  renderScene = (sceneProps) => {
    const Scene = getScene(sceneProps.scene.route.key);
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
        renderOverlay={this.renderOverlay}
        style={styles.navigator} />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
