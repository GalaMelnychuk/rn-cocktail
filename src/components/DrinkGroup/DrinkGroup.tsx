import React from 'react';
import { FlatList, Text, Image, View } from 'react-native';

export const DrinkGroup = ({ item }: any) => {
  const data = item.coctails;

  const DrinkItem = ({ item }: any) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
        <Image
          style={{ width: 100, height: 100, marginRight: 20 }}
          source={{ uri: item.strDrinkThumb }}
        />
        <Text style={{ color: '#7E7E7E', fontSize: 16, lineHeight: 19 }}>{item.strDrink}</Text>
      </View>
    );
  };

  return (
    <View style={{ paddingTop: 20, paddingLeft: 20, backgroundColor: '#ffff' }}>
      <Text style={{ marginBottom: 20, color: '#7E7E7E', fontSize: 14, lineHeight: 16 }}>
        {item.name}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <DrinkItem item={item} />}
      />
    </View>
  );
};
