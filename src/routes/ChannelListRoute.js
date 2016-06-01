import Relay from 'react-relay';

export default class ChannelListRoute extends Relay.Route {
  static routeName = 'ChannelListRoute';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
}
