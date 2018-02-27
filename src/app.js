import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-debug#?./is-dev';
import './cjs-module';

const AppViewModel = DefineMap.extend({
  env: {
    default: () => ({NODE_ENV:'development'}),
    serialize: false
  },
  message: {
    default: 'Hello World!',
    serialize: false
  },
  title: {
    default: 'break-donejs',
    serialize: false
  }
});

export default AppViewModel;