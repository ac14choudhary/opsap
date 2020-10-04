import React from 'react';
import {Text, View, Image} from 'react-native';

export default function Header({titleName}) {
  return (
    <View
      style={{
        height: 56,
        backgroundColor: '#242424',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#F50514',
          fontSize: 20,
          flex: 1,
          marginLeft: '5%',
          fontFamily: 'NeueHaasDisplay-Roman',
        }}>
        {titleName}
      </Text>
      <Image
        style={{
          flex: 1,
          resizeMode: 'contain',
          height: '65%',
          left: '30%',
        }}
        source={require('../Models/SAP.png')}
      />
    </View>
  );
}
