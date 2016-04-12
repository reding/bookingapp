import React, {
    Alert,
    Component,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import ViewUtils from  '../utils/ViewUtils';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

export default class WelcomeSence extends Component {
    _onMomentumScrollEnd(e, state, context) {
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'RegisterSence',
        });
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
                  <Text style={styles.text}>
                      slide n°3
                  </Text>
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
    }
});