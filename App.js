import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Screens */
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerTitle: 'Shoes',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
