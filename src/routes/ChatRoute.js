import Relay from 'react-relay';

import Route from './Route';

export default class ChatRoute extends Route {
  static routeName = 'ChatRoute';
  static queries = {
    channel: () => Relay.QL`query { channelById(id: $channelId) }`,
    viewer: () => Relay.QL`query { viewer }`,
  };
  static paramDefinitions = {
    channelId: { required: true },
    name: { required: true },
  };
  getTitle() {
    return this.params.name;
  }
}
