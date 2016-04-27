var Swiper = require('react-native-swiper');

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

export default class WelcomeSence extends Component {
    _onMomentumScrollEnd() {
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'RegisterSence',
        });
    }
    render() {
      return(
          <Swiper style={styles.wrapper} showsButtons={false}
                  showsPagination={false}
                  onMomentumScrollEnd={this._onMomentumScrollEnd}
                  autoplay={false}>
              <View style={styles.slide1}>
                  <Text style={styles.text}>booking</Text>
              </View>
              <View style={styles.slide2}>
                  <Text style={styles.text}>rating</Text>
              </View>
              <View style={styles.slide3}>
                  <Text style={styles.text}>and enjoy!</Text>
                  <View>
                      <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._onMomentumScrollEnd.bind(this)}>
                          <Text style={styles.text}>start</Text>
                      </TouchableHighlight>
                  </View>
              </View>
          </Swiper>
      )
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    btn:{
        marginTop:10,
        width:80,
        height:35,
        backgroundColor:'#3BC1FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4
    }
});