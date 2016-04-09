import React, {
  AsyncStorage,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


import WelcomeSence from './WelcomeSence';
import MainSence from './RegisterSence';

var USER_STORAGE_KEY = '@AsyncStorageBooking:userkey';

export default class SplashSence extends Component {
  
  componentWillMount(){
      AsyncStorage.getItem(USER_STORAGE_KEY)
          .then((value) => {
            if (value !== null){
              var navigator = this.props.navigator;
              setTimeout(() => {
                  navigator.replace({
                      id: 'WelcomeSence',
                  });
              }, 2000);
            } else {
              var navigator = this.props.navigator;
              setTimeout(() => {
                  navigator.replace({
                      id: 'ProfileSence',
                  });
              }, 2000);
            }
          })
          .catch((error) => this._appendMessage('AsyncStorage error: ' + error.message))
          .done();
  }
  render() {
        return (
       		<View style={styles.container}>
        			<Text style={styles.welcome}>
          				SplashSence!!!
        			</Text>
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