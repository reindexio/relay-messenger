import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import {
  ListView,
  NavigationExperimental,
  ScrollView,
  StyleSheet,
} from 'react-native';

import ChatListItem from './ChatListItem';

const { Header } = NavigationExperimental;

const getEdges = (props) => props.viewer.user.channels.edges;

class ChatListScene extends Component {
  static propTypes = {
    onPushRoute: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(getEdges(props)),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const edges = getEdges(nextProps);
    if (edges !== getEdges(this.props)) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(edges) });
    }
  }

  renderRow(channelEdge) {
    return <ChatListItem channel={channelEdge.node} />;
  }

  render() {
    return (
      <ScrollView>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          enableEmptySections
          renderRow={this.renderRow} />
      </ScrollView>
    );
  }
}

export default Relay.createContainer(ChatListScene, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        user {
          channels(first: 10) {
            edges {
              node {
                ${ChatListItem.getFragment('channel')}
              }
            }
          }
        }
      }
    `,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: Header.HEIGHT,
  },
});
