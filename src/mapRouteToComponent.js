import ChatRoute from './routes/ChatRoute';
import ChatListRoute from './routes/ChatListRoute';

import ChatScene from './chat/ChatScene';
import ChatListScene from './chats/ChatListScene';

const routeToComponentMap = {
  [ChatRoute.routeName]: ChatScene,
  [ChatListRoute.routeName]: ChatListScene,
};

export default (route) => routeToComponentMap[route.name];
