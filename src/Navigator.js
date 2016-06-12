import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { Store, Renderer } from 'react-relay';

import mapRouteToComponent from './mapRouteToComponent';
import { NavigatorContextType } from './PropTypes';

const { CardStack, Header } = NavigationExperimental;

export default class Navigator extends React.Component {
  static propTypes = {
    navigationState: PropTypes.object.isRequired,
  };
  static contextTypes = {
    navigator: NavigatorContextType,
  };

  constructor() {
    super();
    this.navigateBack = this.navigateBack.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  navigateBack() {
    this.context.navigator.pop();
  }

  renderTitle({ scene }) {
    return <Header.Title>{scene.route.getTitle()}</Header.Title>;
  }

  renderOverlay(sceneProps) {
    return (
      <Header
        {...sceneProps}
        onNavigateBack={this.navigateBack}
        renderTitleComponent={this.renderTitle} />
    );
  }

  renderScene({ scene }) {
    return (
      <Renderer
        Container={mapRouteToComponent(scene.route)}
        queryConfig={scene.route}
        environment={Store} />
    );
  }

  render() {
    return (
      <CardStack
        onNavigateBack={this.navigateBack}
        navigationState={this.props.navigationState}
        renderScene={this.renderScene}
        renderOverlay={this.renderOverlay} />
    );
  }
}
