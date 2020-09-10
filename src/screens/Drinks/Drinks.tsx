import React, { useEffect } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';

import { DrinkGroup } from '../../components/DrinkGroup/DrinkGroup';

export const Drinks = ({ navigation }) => {
  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <SafeAreaView>
        <View>
          <FlatList
            data={drinks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DrinkGroup item={item} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
