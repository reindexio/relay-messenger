import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Relay from 'react-relay';

class ChannelList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    const ds =
      new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.user.channels),
    };
  }

  renderRow = (node, index) => (
    <TouchableOpacity>
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
      <ListView
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
/*
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
*/
