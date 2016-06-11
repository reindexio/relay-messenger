const image = 'https://placekitten.com/150/150';
const avatar = 'https://placekitten.com/80/80';

const user = {
  id: 10,
  name: 'Hello',
  image,
};

const channels = [{
  name: 'Hello Hackathon!',
  avatar,
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
          image,
        },
      },
    }],
  },
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another cat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another cat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}, {
  name: 'Another chat',
  avatar,
  members: {},
}];

export default { user, channels };
