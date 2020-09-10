import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, CheckBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';
import { loadDrinks, filterDrinks } from '../../redux/actions/drinksActions';

import { requests } from '../../services/requests';
import { FilterItem } from '../../components/FilterItem/FilterItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FilterList = ({ navigation }) => {
  const categories = useSelector((state) => state.categories);
  const firstArrCateg = categories.map((elem) => elem.strCategory);
  console.log('firstArrCateg :>> ', firstArrCateg);
  const dispatch = useDispatch();

  const chosenCategory = categories.filter((elem) => elem.selected).map((elem) => elem.strCategory);

  const sendSelectedCategory = async () => {
    await dispatch(loadDrinks(chosenCategory));
    await dispatch(filterDrinks(chosenCategory));
    await navigation.navigate('Drinks');
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.strCategory}
          renderItem={({ item }) => <FilterItem item={item} />}
        />
      </View>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#272727' }}
        onPress={sendSelectedCategory}>
        <View>
          <Text style={{ color: '#FFFFFF' }}>APPLY</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
