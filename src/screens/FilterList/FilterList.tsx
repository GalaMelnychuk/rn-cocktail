import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { filterDrinks } from '../../redux/actions/drinksActions';
import { FilterItem } from '../../components/FilterItem/FilterItem';
import { styles } from './stylesFilterList';
import { RootState } from '../../redux/reducers/rootReducer';

export const FilterList = ({ navigation }: any) => {
  const categories = useSelector((state: RootState) => state.categories);
  const loader = useSelector((state: RootState) => state.loader);
  const chosenCategory = categories.filter((elem) => elem.selected).map((elem) => elem.strCategory);
  const dispatch = useDispatch();

  const sendSelectedCategory = () => {
    dispatch(filterDrinks(chosenCategory));
    navigation.navigate('Drinks');
  };

  return (
    <View style={styles.container}>
      {loader ? (
        <ActivityIndicator size='large' />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.strCategory}
          renderItem={({ item }) => <FilterItem item={item} />}
        />
      )}
      <TouchableOpacity style={styles.btn} onPress={sendSelectedCategory}>
        <View>
          <Text style={styles.textBtn}>APPLY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
