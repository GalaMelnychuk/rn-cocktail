import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { filterDrinks } from '../../redux/actions/drinksActions';
import { FilterItem } from '../../components/FilterItem/FilterItem';
import { styles } from './stylesFilterList';

export const FilterList = ({ navigation }: any) => {
  const categories = useSelector((state) => state.categories);
  const chosenCategory = categories.filter((elem) => elem.selected).map((elem) => elem.strCategory);
  const dispatch = useDispatch();

  const sendSelectedCategory = () => {
    dispatch(filterDrinks(chosenCategory));
    navigation.navigate('Drinks');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.strCategory}
            renderItem={({ item }) => <FilterItem item={item} />}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={sendSelectedCategory}>
          <View>
            <Text style={styles.textBtn}>APPLY</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
