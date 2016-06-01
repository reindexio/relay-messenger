import Relay from 'react-relay';

export default class ChannelRoute extends Relay.Route {
  static routeName = 'ChannelRoute';
  static queries = {
    channel: () => Relay.QL`query { channelById($channelId) }`,
    viewer: () => Relay.QL`query { viewer }`,
  };
  static paramDefinitions = {
    channelId: { required: true },
  };
}
