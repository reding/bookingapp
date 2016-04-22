/**
 * Created by redin on 2016/4/12.
 */
import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MainSence extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    MainSence!!!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});