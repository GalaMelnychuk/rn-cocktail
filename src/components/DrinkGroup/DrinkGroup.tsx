import React from 'react';
import { SafeAreaView, FlatList, Text, Image } from 'react-native';

export const DrinkGroup = ({ item }: any) => {
  const DrinkItem = ({ item }: any) => {
    return (
      <>
        <Image style={{ width: 50, height: 50 }} source={{ uri: item.strDrinkThumb }} />
        <Text>{item.strDrink}</Text>
      </>
    );
  };

  const data = item.coctails;

  return (
    <>
      <SafeAreaView>
        <Text>{item.name}</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => <DrinkItem item={item} />}
        />
      </SafeAreaView>
    </>
  );
};
