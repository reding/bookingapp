/**
 * Created by redin on 4/27/2016.
 */
import React, {
    Component,
    Text,
    View,
    StyleSheet,
} from 'react-native';
var Util = require('../utils/ViewUtils');
var { connect } = require('react-redux');

export class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.inputRow}>
                <Text>请输入桌号：</Text>
                <TextInput
                    style={styles.input}
                    placeholder="桌号"
                    onChange={this._getNickName.bind(this)}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        marginLeft: 10,
        width: 220,
        borderWidth: Util.pixel,
        height: 45,
        paddingLeft: 8,
        borderRadius: 5,
        borderColor: '#ccc'
    }
});

module.exports = connect()(LoginView);