import Relay, { Mutation } from 'react-relay';

export default class SendMessageMutation extends Mutation {
  static fragments = {
    channel: () => Relay.QL`
      fragment on Channel {
        id
      }
    `,
    sender: () => Relay.QL`
      fragment on User {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { createMessage }`;
  }

  getVariables() {
    return {
      channel: this.props.channel.id,
      sender: this.props.sender.id,
      text: this.props.text,
      date: '@TIMESTAMP',
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on _MessagePayload {
        changedMessageEdge
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentID: this.props.channel.id,
        connectionName: 'messages',
        edgeName: 'changedMessageEdge',
        rangeBehaviors: {
          '': 'append',
        },
      },
    ];
  }

  getOptimisticResponse() {
    return {
      changedMessageEdge: {
        node: {
          date: (new Date()).toISOString(),
          text: this.props.text,
          sender: this.props.sender,
        },
      },
    };
  }
}
