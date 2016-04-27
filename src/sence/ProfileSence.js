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

import StorageUtils from '../utils/StorageUtils';
var USER_STORAGE_KEY = '@AsyncStorageBooking:userkey';

var storage = new StorageUtils({
    //最大容量，默认值1000条数据循环存储
    size: 1000,

    //数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24,

    //读写时在内存中缓存数据。默认启用。
    enableCache: false,

    //如果storage中没有相应数据，或数据已过期，
    //则会调用相应的sync同步方法，无缝返回最新数据。
    sync : {

    }
});

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
        storage.save({
            key:USER_STORAGE_KEY,
            rawData: {
                userName:nickname,
                isLogin:false,
                phoneNumber:phoneNumber
            }
        });

        storage.load({
            key:USER_STORAGE_KEY,
            autoSync:false
        }).then(
            ret =>{
                if(ret.isLogin == true){
                    var navigator = this.props.navigator;
                    navigator.replace({
                        id: 'MainSence',
                    });
                } else {
                    var navigator = this.props.navigator;
                    navigator.replace({
                        id: 'RegisterSence',
                    });
                }
            }
        ).catch (error =>{
            var navigator = this.props.navigator;
                navigator.replace({
                    id: 'RegisterSence',
                });
        });
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
                    <TouchableHighlight underlayColor="#fff" style={styles.btn} 
                                        onPress={this._login.bind(this)}>
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