const user = {
  id: 10,
  name: 'Hello',
  image: 'http://placekitten.com/150/150',
};

const channels = [{
  name: 'Hello Hackathon!',
  avatar: 'http://placekitten.com/150/150',
  members: {
    count: 5,
  },
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
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another cat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another cat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}, {
  name: 'Another chat',
  avatar: 'http://placekitten.com/150/150',
  members: {},
}];

export default { user, channels };
