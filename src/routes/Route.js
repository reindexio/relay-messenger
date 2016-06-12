import Relay from 'react-relay';
import uuid from 'uuid';

export default class Route extends Relay.Route {
  key = uuid.v4();

  getTitle() {
    return null;
  }
}
