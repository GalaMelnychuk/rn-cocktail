import React from 'react';
import { FlatList, Text, Image, View } from 'react-native';
import { styles } from './stylesDrinkGroup';

export const DrinkGroup = ({ item }: any) => {
  const data = item.coctails;

  const DrinkItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.img} source={{ uri: item.strDrinkThumb }} />
        <Text style={styles.itemText}>{item.strDrink}</Text>
      </View>
    );
  };

  return (
    <View style={styles.groupContainer}>
      <Text style={styles.textGroup}>{item.name}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <DrinkItem item={item} />}
      />
    </View>
  );
};
