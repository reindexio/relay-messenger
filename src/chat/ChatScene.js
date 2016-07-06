import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import GiftedMessenger from 'react-native-gifted-messenger';
import {
  Dimensions,
  NavigationExperimental,
  Platform,
  StatusBar,
} from 'react-native';

import SendMessageMutation from '../mutations/SendMessageMutation';

const { Header } = NavigationExperimental;

class ChatScene extends Component {
  static propTypes = {
    channel: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
    this.mapEdgeToMessage = this.mapEdgeToMessage.bind(this);
  }

  handleSend(message) {
    const { channel, viewer } = this.props;
    Relay.Store.commitUpdate(new SendMessageMutation({
      channel,
      sender: viewer.user,
      text: message.text,
    }));
  }

  mapEdgeToMessage({ node: { date, id, sender, text } }) {
    return {
      text,
      uniqueId: id,
      date: new Date(date),
      name: sender.name,
      image: { uri: sender.image },
      position: this.props.viewer.user.id === sender.id ? 'right' : 'left',
    };
  }

  render() {
    const { edges } = this.props.channel.messages;
    return (
      <GiftedMessenger
        styles={{
          container: {
            flex: 1,
            backgroundColor: 'white',
            marginTop: Header.HEIGHT,
          },
        }}
        messages={edges.map(this.mapEdgeToMessage)}
        handleSend={this.handleSend}
        maxHeight={
          Dimensions.get('window').height - Header.HEIGHT -
            (Platform.OS === 'android' ? StatusBar.currentHeight : 0)
        }
        autoFocus={false}
        parseText />
    );
  }
}

export default Relay.createContainer(ChatScene, {
  fragments: {
    channel: () => Relay.QL`
      fragment on Channel {
        messages(last: 20) {
          edges {
            node {
              date
              id
              sender {
                id
                image
                name
              }
              text
            }
          }
        }
        ${SendMessageMutation.getFragment('channel')}
      }
    `,
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        user {
          id
          image
          name
          ${SendMessageMutation.getFragment('sender')}
        }
      }
    `,
  },
});
