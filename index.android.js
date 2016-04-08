/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{
    View,
    Navigator,
    AppRegistry
} from 'react-native';
import FirstPageComponent from './src/sence/SplashSence';

export default class onlinebooking extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={() => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                if(route.component) {
                return <Component {...route.params} navigator={navigator} />
                }
            }
          } />
        );
    }
}

AppRegistry.registerComponent('onlinebooking', () => onlinebooking);
