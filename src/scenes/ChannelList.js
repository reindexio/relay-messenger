import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  NavigationExperimental,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { Header } = NavigationExperimental;

import mockData from '../mockData';

class ChannelList extends Component {
  static title = () => 'Chats';
  static propTypes = {
    onPushRoute: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const ds =
      new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(mockData.channels),
    };
  }

  renderRow = (node, index) => (
    <TouchableOpacity onPress={() => this.props.onPushRoute({ key: 'Chat' })}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={{ uri: node.avatar }} />
        <Text key={index} style={styles.text}>
          {node.name} ({node.members.count || 1})
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <ScrollView>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: Header.HEIGHT,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#a0a0a0',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 12,
    alignSelf: 'center',
  },
});

export default ChannelList;
