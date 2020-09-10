import React, { useEffect } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';
import { RootState } from '../../redux/reducers/rootReducer';
import { DrinkGroup } from '../../components/DrinkGroup/DrinkGroup';
import { styles } from './stylesDrinks';

export const Drinks = () => {
  const drinks = useSelector((state: RootState) => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <FlatList
              data={drinks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <DrinkGroup item={item} />}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};
