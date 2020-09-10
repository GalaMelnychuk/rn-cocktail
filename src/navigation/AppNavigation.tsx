import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FilterList } from '../screens/FilterList/FilterList';
import { Drinks } from '../screens/Drinks/Drinks';

const Stack = createStackNavigator();

const BtnFilter = ({ navigation }: any) => {
  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Filter')}>
      <Image style={{ width: 27, height: 29 }} source={require('../img/icons/filter.png')} />
    </TouchableOpacity>
  );
};

export const content = (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          },
          headerRight: () => <BtnFilter navigation={navigation} />,
          headerLeft: () => <Text style={{ fontSize: 24, marginLeft: 30 }}>Drinks</Text>,
        })}
        name='Drinks'
        component={Drinks}
      />

      <Stack.Screen
        options={{
          title: 'Filters',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          },
          headerBackImage: () => (
            <Image
              style={{ width: 29, height: 24, marginLeft: 20 }}
              source={require('../img/icons/arrow.png')}
            />
          ),
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
        name='Filter'
        component={FilterList}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
