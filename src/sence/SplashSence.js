import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import WelcomeSence from './WelcomeSence';
import MainSence from './MainSence';

export default class SplashSence extends Component {



    _pressButton(){

      // if this is the first launch; go to welcome sence, then the profile sence, otherwise go to the mainsence
       

      const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'WelcomeSence',
                component: WelcomeSence,
            });
        }
    }

  render() {
      return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
        <Text style={styles.welcome}>
          SplashSence!!!
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});