/**
 * Created by redin on 5/11/2016.
 */


'use strict';

import React, {
    Component,
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class ListPagerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
                    <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Friends</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="person-stalker" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Friends</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Messenger</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-world" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Notifications</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="navicon-round" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Other nav</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)'
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    }
});