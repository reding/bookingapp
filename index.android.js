/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{
    View,
    Navigator,
    AppRegistry,
    StyleSheet,
    Component,
    Text,
    TouchableOpacity,
} from 'react-native';
import SplashSence from './src/sence/SplashSence';
import WelcomeSence from './src/sence/WelcomeSence';
import ProfileSence from './src/sence/ProfileSence';
import RegisterSence from './src/sence/RegisterSence';
import MainSence from './src/sence/MainSence';

export default class onlinebooking extends React.Component {
    render() {
        return (
        <Navigator
            initialRoute={{ id: 'SplashSence' ,name: 'SplashSence'}}
            configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={this.renderScene.bind(this)} />
        );
    }

    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'SplashSence') {
            return (
                <SplashSence
                    navigator={navigator} />
            );
        }
        if (routeId === 'WelcomeSence') {
            return (
                <WelcomeSence
                navigator={navigator} />
            );
        }
        if (routeId === 'ProfileSence') {
            return (
                <ProfileSence
                    navigator={navigator} />
            );
        }
        if (routeId === 'RegisterSence') {
            return (
                <RegisterSence
                navigator={navigator} />
            );
        }
        if (routeId === 'MainSence') {
            return (
                <MainSence
                    navigator={navigator} />
            );
        }
        return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('onlinebooking', () => onlinebooking);
