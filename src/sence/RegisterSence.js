import React, {
    Component,
    StyleSheet,
    Alert,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
import LoginView from  '../view/LoginView';

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
        Alert.alert("Title", "barcode: " + e.data);
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'MainSence',
            tableID: e.data
        });
    }

    render() {
        if (!this.props.cameraOpen) {
            return<LoginView />;
        }
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
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});