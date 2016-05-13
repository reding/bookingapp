/**
 * Created by redin on 2016/4/12.
 */
import React, {
    StyleSheet,
    View,
    Component,
}from 'react-native';

import HeaderView from '../view/HeaderView';
import ListPagerView from '../view/ListPagerView';
export default class MainSence extends Component {
    render() {
        return <View style={styles.container}>
            <HeaderView />
            <ListPagerView />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    }
});