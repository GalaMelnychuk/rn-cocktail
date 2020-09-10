import React from 'react';
import { View, SafeAreaView, FlatList, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

export const DrinkGroup = ({ item }) => {
  const DrinkItem = ({ item }) => {
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
          keyExtractor={(item) => item.strDrinkThumb}
          renderItem={({ item }) => <DrinkItem item={item} />}
        />
      </SafeAreaView>
    </>
  );
};
