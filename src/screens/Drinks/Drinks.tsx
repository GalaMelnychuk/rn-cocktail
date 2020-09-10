import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Button, FlatList, CheckBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';

import { requests } from '../../services/requests';
import { loadDrinks, filterDrinks } from '../../redux/actions/drinksActions';

export const Drinks = ({ navigation }) => {
  const categories = useSelector((state) => state.categories);
  const chosenCateg = categories.filter((elem) => elem.selected).map((item) => item.strCategory);
  const drinks = useSelector((state) => state.drinks);

  const dispatch = useDispatch();
  // dispatch(filterDrinks(chosenCateg));

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // useEffect(() => {
  //   filterDrinks(chosenCateg);
  // }, []);

  return (
    <>
      <SafeAreaView>
        <View>
          <FlatList
            data={drinks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <Text>{item.name}</Text>
                {/* <FilterList 
            data={categories}
            keyExtractor={(item) => item.strCategory}
            renderItem={({ item }) =><> <Text>{item.strCategory}</Text>
              
              
              /> */}
              </>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
