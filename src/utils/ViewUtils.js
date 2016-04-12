/**
 * Created by redin on 2016/4/11.
 */
var React = require('react-native');
var Dimensions = require('Dimensions');

var {
    PixelRatio
} = React;

var ViewUtils = {

    //单位像素
    pixel: 1 / PixelRatio.get(),
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
};

module.exports = ViewUtils;

