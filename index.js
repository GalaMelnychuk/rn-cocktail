import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

// AppRegistry.registerComponent('Point', () => Point)

AppRegistry.registerComponent(appName, () => App);
