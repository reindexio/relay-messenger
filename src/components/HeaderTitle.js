import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const NavigationHeaderTitle = ({ children, style, textStyle, viewProps }) => (
  <View style={[styles.title, style]} {...viewProps}>
    <Text style={[styles.titleText, textStyle]}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
  },
});

NavigationHeaderTitle.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  viewProps: React.PropTypes.object,
};

export default NavigationHeaderTitle;
