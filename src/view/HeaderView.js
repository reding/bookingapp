/**
 * Created by redin on 4/28/2016.
 */

'use strict';

import React, {
    Component,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class HeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../res/img/logo.png')} style={styles.logo}/>
                <Text style={styles.title}>menu</Text>
                <Image source={require('../../res/img/logo.png')} style={styles.cartIcon}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布  
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:  10,
        paddingBottom:  10,
        height: 30,
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中  
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'stretch'  // 设置拉伸模式  
    },
    cartIcon: {
        height: 30,
        width: 30,
        resizeMode: 'stretch'
    },
    title: {
        height: 30,
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        textAlign: 'center'
    }
});  