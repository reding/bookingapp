import React, {
    Component,
    StyleSheet,
    Alert,
    TouchableHighlight,
    View,
    Text,
    Platform,
    BackAndroid,
    TextInput,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
var Util = require('../utils/ViewUtils');

export default class RegisterSence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            torchMode: 'off',
            cameraType: 'back',
            cameraOpen: false
        };
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid.bind(this));
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid.bind(this));
        }
    }

    _onBackAndroid(){
        if(this.state.cameraOpen === true){
            this.setState({
                cameraOpen:false
            });
            return true;
        } else {
            Alert.alert(
                '退出？',
                '要退出应用吗？',
                [
                    {text: '确定', onPress: () => { BackAndroid.exitApp();}},
                    {text: '取消', onPress: () => { return true}}
                ]
            );
            return true;
        }
    }


    _barcodeReceived(e) {
        Alert.alert("Title", "barcode: " + e.data);
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'MainSence',
            params:{
                tableID: e.data
            }
        });
    }

    _capture(){
        this.setState({
            cameraOpen:true
        });
    }

    _register(){
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'MainSence',
            params:{
                tableID: 111
            }
        });
    }
    
    render() {
        return (
            this.state.cameraOpen ?
                <BarcodeScanner
                    onBarCodeRead={this._barcodeReceived}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                />
                :
                <View>
                    <View style={styles.inputRow}>
                        <Text>请输入桌号：</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="桌号"
                        />
                    </View>
                    <View style={styles.container}>
                        <TouchableHighlight underlayColor="#fff" style={styles.btn}
                                            onPress={this._capture.bind(this)}>
                            <Text style={{color:'#fff'}}>扫描</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.container}>
                        <TouchableHighlight underlayColor="#fff" style={styles.btn}
                                            onPress={this._register.bind(this)}>
                            <Text style={{color:'#fff'}}>注册点餐</Text>
                        </TouchableHighlight>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    btn: {
        marginTop: 10,
        width: 80,
        height: 35,
        backgroundColor: '#3BC1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    input: {
        marginLeft: 10,
        width: 220,
        borderWidth: Util.pixel,
        height: 45,
        paddingLeft: 8,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
});