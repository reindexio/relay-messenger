import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import Relay from 'react-relay';
import GiftedMessenger from 'react-native-gifted-messenger';

class Channel extends Component {
  static propTypes = {
    channel: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };
  render() {
    const { user } = this.props;
    const { edges } = this.props.channel.messages;
    const messages = edges.map(({ node: { date, id, sender, text } }) => ({
      text,
      uniqueId: id,
      date: new Date(date),
      name: sender.name,
      image: { uri: sender.image },
      position: user.id === sender.id ? 'right' : 'left',
    }));
    return (
      <View style={{
        flex: 1,
        marginTop: 20,
      }}>
        <GiftedMessenger
          ref={(c) => { this._GiftedMessenger = c; }}
          styles={{
            container: {
              width: Dimensions.get('window').width,
            },
            bubbleRight: {
              marginLeft: 70,
              backgroundColor: '#007aff',
            },
          }}
          autoFocus={false}
          messages={messages}
          handleSend={() => {}}
          onErrorButtonPress={() => {}}
          maxHeight={Dimensions.get('window').height - 20}
          loadEarlierMessagesButton={false}
          onLoadEarlierMessages={() => {}}
          senderName={user.name}
          senderImage={{ uri: user.image }}
          onImagePress={() => {}}
          displayNames
          parseText
          handlePhonePress={() => {}}
          handleUrlPress={() => {}}
          handleEmailPress={() => {}}
          isLoadingEarlierMessages={false} />
      </View>
    );
  }
}


export default Relay.createContainer(Channel, {
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
});
