import React, {useState, useEffect} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';

function SlashScreen({navigation}) {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.dispatch(StackActions.replace('HomeScreen'));
    }, 3000);

    return () => clearTimeout(interval);
  });

  return (
    <View style={style.screen}>
      <StatusBar backgroundColor={'#3095f0'} barStyle={'light-content'} />
      <Image
        source={require('../images/logo.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
        Kamus Saku
      </Text>
      <Text style={{color: 'white'}}>Kamus bahasa indonesia ke inggris</Text>
      <ActivityIndicator
        size={'large'}
        color={'white'}
        style={{marginTop: 20}}
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3095f0',
  },
});

export default SlashScreen;
