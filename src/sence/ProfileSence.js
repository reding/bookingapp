import React, {
    Alert,
    Component,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';

var Util = require('../utils/ViewUtils');

export default class ProfileSence extends Component {
    constructor(props){
        super(props);
        this.state = {
            nickName: 'defaultName',
            phoneNumber: 'defaultNumber'
        }
    }


    _getNickName(event){
        this.setState({
            nickName: event.nativeEvent.text
        });
    }

    _getPhoneNumber(event){
        this.setState({
            phoneNumber:  event.nativeEvent.text
        })
    }
    _login(){
        var nickname = this.state.nickName;
        var phoneNumber = this.state.phoneNumber;
        Alert.alert("Title","Nickname: "+nickname+"  phoneNumber: "+phoneNumber);
    }
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('./img/logo.png')}/>
            </View>
            <View style={styles.container}>
                <Text>请设置昵称和手机号：</Text>
                <View style={styles.inputRow}>
                    <Text>昵称</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入用户名"
                        onChange={this._getNickName.bind(this)}/>
                </View>
                <View style={styles.inputRow}>
                    <Text>手机</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入手机号"
                        onChange={this._getPhoneNumber.bind(this)}/>
                </View>
                <View>
                    <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login.bind(this)}>
                        <Text style={{color:'#fff'}}>设置</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100,
        resizeMode: Image.resizeMode.contain
    },
    container:{
        marginTop:50,
        alignItems:'center',
    },
    inputRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:10,
    },
    input:{
        marginLeft:10,
        width:220,
        borderWidth:Util.pixel,
        height:45,
        paddingLeft:8,
        borderRadius:5,
        borderColor:'#ccc'
    },
    btn:{
        marginTop:10,
        width:80,
        height:35,
        backgroundColor:'#3BC1FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,
    }
});