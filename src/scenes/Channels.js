import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Channels = ({ onPushRoute }) => (
  <ScrollView style={styles.scrollView}>
    <TouchableOpacity onPress={() => onPushRoute({ key: 'Chat' })}>
      <Text>Chat</Text>
    </TouchableOpacity>
  </ScrollView>
);

Channels.title = () => 'Channels';
Channels.propTypes = {
  onPushRoute: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 64,
  },
});

export default Channels;
