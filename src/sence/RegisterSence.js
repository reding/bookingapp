import React, {
    Component,
    StyleSheet,
    Alert,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

export default class RegisterSence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            torchMode: 'off',
            cameraType: 'back',
            cameraOpen: false
        };
    }
    _barcodeReceived(e) {
        Alert.alert("Title","barcode: "+e.data);
    }
  render() {
    return (
        <BarcodeScanner
            onBarCodeRead={this._barcodeReceived}
            style={{ flex: 1 }}
            torchMode={this.state.torchMode}
            cameraType={this.state.cameraType}
        />
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