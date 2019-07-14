import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

const Router = createStackNavigator({
  Home,
  Chat
});

export default createAppContainer(Router)