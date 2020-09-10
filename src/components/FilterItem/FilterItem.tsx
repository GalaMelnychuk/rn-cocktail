import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { setCategories } from '../../redux/actions/categoriesActions';

// import { ICategory } from '../../redux/constans/categoriesConstans';

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
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Text style={{ margin: 8 }}>{item.strCategory}</Text>
        <CheckBox
          style={{ width: 35, height: 20 }}
          lineWidth={2}
          disabled={false}
          boxType={'square'}
          tintColor={'rgba(173, 171, 182, 0.4'}
          tintColors={{ true: '#FFD324', false: 'rgba(173, 171, 182, 0.4' }}
          onCheckColor={'#FFD324'}
          onTintColor={'#FFD324'}
          animationDuration={0.2}
          value={toggleCheckBox}
          onValueChange={func}
        />
      </View>
    </View>
  );
};
