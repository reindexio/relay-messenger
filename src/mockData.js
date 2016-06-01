const user = {
  id: 10,
  name: 'Hello',
  image: 'http://placekitten.com/150/150',
};

const channel = {
  name: 'Hello Hackathon!',
  messages: {
    edges: [{
      node: {
        date: new Date(2000, 1, 1),
        id: 0,
        text: 'Hello',
        sender: user,
      },
    }, {
      node: {
        date: new Date(2001, 1, 1),
        id: 1,
        text: 'World',
        sender: {
          id: 11,
          name: 'World',
          image: 'http://placekitten.com/150/150',
        },
      },
    }],
  },
};

export default { user, channel };
