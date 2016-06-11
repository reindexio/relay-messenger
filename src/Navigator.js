import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack, Header } = NavigationExperimental;

import scenes from './scenes';

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
  renderTitle = (sceneProps) => {
    const scene = getScene(sceneProps.scene.route.key);
    return (
      <Header.Title>{scene.title()}</Header.Title>
    );
  };
  renderOverlay = (sceneProps) => (
    <Header
      {...sceneProps}
      onNavigateBack={this.onPopRoute}
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
    return (
      <CardStack
        onNavigateBack={this.onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this.renderScene}
        renderOverlay={this.renderOverlay} />
    );
  }
}
