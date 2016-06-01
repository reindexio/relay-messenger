import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Relay from 'react-relay';

import mockData from '../mockData';
import Messages from '../components/Messages';

class Chat extends Component {
  render() {
    return (
      <View>
        <Messages user={this.props.user} channel={this.props.channel} />
      </View>
    );
  }
}

export default Chat;
/* export default Relay.createContainer(Chat, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id
        name
        image
      }
    `,
    channel: () => Relay.QL`
      fragment on Channel {
        name
        messages {
          edges {
            node {
              date
              id
              sender {
                id
                name
                image
              }
              text
            }
          }
        }
      }
    `,
  },
}); */
