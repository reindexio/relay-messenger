import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ChatRoute from '../routes/ChatRoute';
import { NavigatorContextType } from '../PropTypes';

class ChatListItem extends Component {
  static contextTypes = {
    navigator: NavigatorContextType,
  };

  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const route = new ChatRoute({
      channelId: this.props.channel.id,
      name: this.props.channel.name,
    });
    this.context.navigator.push(route);
  }

  render() {
    const { channel } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.listItem}>
          <Image
            style={styles.image}
            source={{ uri: channel.members.edges[0].node.image }} />
          <Text style={styles.text}>
            {channel.name} ({channel.members.count})
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ChatListItem.propTypes = { channel: PropTypes.object };

export default Relay.createContainer(ChatListItem, {
  fragments: {
    channel: () => Relay.QL`
      fragment on Channel {
        id
        name
        members(first: 3) {
          count
          edges {
            node {
              image
            }
          }
        }
      }
    `,
  },
});

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#a0a0a0',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 12,
    alignSelf: 'center',
  },
});
