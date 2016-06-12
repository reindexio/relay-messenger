import Relay from 'react-relay';

import Route from './Route';

export default class ChatListRoute extends Route {
  static routeName = 'ChatListRoute';
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
  getTitle() {
    return 'Chats';
  }
}
