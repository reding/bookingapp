import React,{
  Component,
  Image,
} from 'react-native';

import StorageUtils from '../utils/StorageUtils';

var storage = new StorageUtils({
    //最大容量，默认值1000条数据循环存储
    size: 1000,

    //数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24,

    //读写时在内存中缓存数据。默认启用。
    enableCache: true,

    //如果storage中没有相应数据，或数据已过期，
    //则会调用相应的sync同步方法，无缝返回最新数据。
    sync : {

    }
});

var USER_STORAGE_KEY = '@AsyncStorageBooking:userkey';

global.storage = storage;
global.userKey = USER_STORAGE_KEY;

export default class SplashSence extends Component {
  
  componentWillMount(){
      storage.load({
          key:USER_STORAGE_KEY,
          autoSync:false
      }).then(
          ret =>{
              if(ret.userName !== null){
                  if(ret.isLogin == true){
                      var navigator = this.props.navigator;
                      setTimeout(() => {
                          navigator.replace({
                              id: 'MainSence'
                          });
                      }, 2000);
                  } else {
                      var navigator = this.props.navigator;
                      setTimeout(() => {
                          navigator.replace({
                              id: 'RegisterSence',
                          });
                      }, 2000);
                  }
              } else {
                  var navigator = this.props.navigator;
                  setTimeout(() => {
                      navigator.replace({
                          id: 'ProfileSence',
                      });
                  }, 2000);
              }
          }
      ).catch (error =>{
          var navigator = this.props.navigator;
          setTimeout(() => {
              navigator.replace({
                  id: 'WelcomeSence',
              });
          }, 2000);
      });
  }
  render() {
        return (
       		<Image source={require('./img/splash_bg.png')}/>
    	);
  }
}