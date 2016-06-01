import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Relay from 'react-relay';

class ChannelList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  renderRow = ({ node }) => (
    <Text>{node.name} ({node.members.count})</Text>
  );

  render() {
    const { edges } = this.props.user.pictures;
    return (
      <View>{edges.map(this.renderRow)}</View>
    );
  }
}

export default Relay.createContainer(ChannelList, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        channels(first: 10) {
          edges {
            node {
              id
              name
              members { count }
            }
          }
        }
      }
    `,
  },
});
