import * as React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function DetailScreen({navigation, route}) {
  const {item} = route.params;
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#0194f1'} barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: '#0194f1',
          paddingBottom: 10,
          elevation: 3,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
              Kamus Saku
            </Text>
            <Text style={{color: '#FFFFFF'}}>
              Kamus bahasa indonesia ke inggris
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          backgroundColor: 'white',
          elevation: 3,
          marginTop: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <Text>Bahasa indonesia</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.indonesia}</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderRadius: 8,
          backgroundColor: 'white',
          elevation: 3,
          marginTop: 10,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <Text>Bahasa Inggris</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.english}</Text>
      </View>
    </View>
  );
}

export default DetailScreen;
