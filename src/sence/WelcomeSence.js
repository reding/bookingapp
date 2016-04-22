import React, {
    Alert,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import ViewUtils from  '../utils/ViewUtils';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

export default class WelcomeSence extends Component {

    goNext(){
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 'MainSence',
            });
        }, 100);
    }

  render() {
      return (
          <SwipeableViews style={styles.slideContainer}>
              <View style={[styles.slide, styles.slide1]}>
                  <Text style={styles.text}>
                      slide n°1
                  </Text>
              </View>
              <View style={[styles.slide, styles.slide2]}>
                  <Text style={styles.text}>
                      slide n°2
                  </Text>
              </View>
              <View style={[styles.slide, styles.slide3]}>
                  <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this.goNext()}>
                      <Text style={{color:'#fff'}}>设置</Text>
                  </TouchableHighlight>
              </View>
          </SwipeableViews>
      )
  }
}

var styles = StyleSheet.create({
    slideContainer: {
    },
    slide: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0DD6EB',
    },
    text: {
        color: '#fff',
        fontSize: 16
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