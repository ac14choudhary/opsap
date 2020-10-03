import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 76,
        paddingTop: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: 'black',
      }}>
      <Text
        style={{
          fontSize: 25,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
