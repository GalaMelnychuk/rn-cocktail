import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { setCategories } from '../../redux/actions/categoriesActions';
import { styles } from './stylesFilterItem';

export const FilterItem = ({ item }: any) => {
  const dispatch = useDispatch();

  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const func = () => {
    if (toggleCheckBox) {
      dispatch(setCategories(item));
    } else {
      setToggleCheckBox(!toggleCheckBox);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textCategiry}>{item.strCategory}</Text>
        <CheckBox
          style={styles.checkBox}
          hideBox={true}
          lineWidth={2}
          disabled={false}
          onCheckColor={'#000000'}
          onTintColor={'#000000'}
          animationDuration={0.2}
          value={toggleCheckBox}
          onValueChange={func}
        />
      </View>
    </View>
  );
};
