import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WelcomeSence extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WelcomeSence!!!
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