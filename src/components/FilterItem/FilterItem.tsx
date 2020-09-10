import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { setCategories } from '../../redux/actions/categoriesActions';

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
    <View style={{}}>
      <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
        <Text style={{ margin: 8, color: '#7E7E7E', fontSize: 16, lineHeight: 19 }}>
          {item.strCategory}
        </Text>
        <CheckBox
          style={{ width: 40, height: 35 }}
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
