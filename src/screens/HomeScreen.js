import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const dataList = [
  {
    indonesia: 'air',
    english: 'water',
    foto: 'https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    indonesia: 'kucing',
    english: 'cat',
    foto: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    indonesia: 'ikan',
    english: 'fish',
    foto: 'https://images.unsplash.com/photo-1570479590742-d1506c4d2360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    indonesia: 'makanan',
    english: 'food',
    foto: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    indonesia: 'tumbuhan',
    english: 'tree',
    foto: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [database, setDatabase] = useState(dataList);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#0194f1',
          paddingBottom: 10,
          elevation: 3,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        <StatusBar backgroundColor={'#0194f1'} barStyle={'light-content'} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../images/logo.png')}
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#FFFFFF',
              borderRadius: 6,
            }}
          />

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

      <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        style={{
          backgroundColor: '#FFFFFF',
          elevation: 3,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 6,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        placeholder={'Masukkan kata kunci...'}
      />

      <FlatList
        data={database}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              backgroundColor: '#FFFFFF',
              marginVertical: 5,
              paddingVertical: 10,
              borderRadius: 6,
              elevation: 3,
              paddingLeft: 20,
            }}
            onPress={() => navigation.navigate('DetailScreen', {item: item})}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              {item.indonesia}
            </Text>
            <Text style={{fontSize: 14}}>{item.english}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;
