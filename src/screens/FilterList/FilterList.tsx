import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { filterDrinks } from '../../redux/actions/drinksActions';
import { FilterItem } from '../../components/FilterItem/FilterItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FilterList = ({ navigation }) => {
  const categories = useSelector((state) => state.categories);
  const chosenCategory = categories.filter((elem) => elem.selected).map((elem) => elem.strCategory);
  const dispatch = useDispatch();

  const sendSelectedCategory = () => {
    dispatch(filterDrinks(chosenCategory));
    navigation.navigate('Drinks');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 35,
      }}>
      <SafeAreaView>
        <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.strCategory}
            renderItem={({ item }) => <FilterItem item={item} />}
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#272727',
            paddingVertical: 17,
          }}
          onPress={sendSelectedCategory}>
          <View>
            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 19, fontWeight: '600' }}>
              APPLY
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
