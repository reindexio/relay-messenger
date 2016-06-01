import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import GiftedMessenger from 'react-native-gifted-messenger';

class Messages extends Component {
  static propTypes = {
    channel: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    const { user } = this.props;
    const { edges } = this.props.channel.messages;


    const messages = edges.map(({ node: { date, id, sender, text } }) =>
      this.constructMessage({ date, id, sender, text }, user));

    this.setState({ messages });
  }

  constructMessage({ text, id = Date.now(), date = Date.now(), sender }, user) {
    if (!sender) {
      sender = user;
    }

    return {
      text,
      uniqueId: id,
      date: new Date(date),
      name: sender.name,
      image: { uri: sender.image },
      position: user.id === sender.id ? 'right' : 'left',
    };
  }

  handleSend = message => {
    const { user } = this.props;
    const currentMessages = this.state.messages;

    this.setState({
      messages: [...currentMessages, this.constructMessage({
        text: message.text,
      }, user)],
    });
  }

  render() {
    const { user } = this.props;

    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}>
        <GiftedMessenger
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
          messages={this.state.messages}
          handleSend={this.handleSend}
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

export default Messages;
