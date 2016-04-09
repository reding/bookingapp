import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ProfileSence extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
    		style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    		onChangeText={(text) => this.setState({text})}
    		value={this.state.text}
  		/>
        <Text style={styles.welcome}>
            ProfileSence!!!
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