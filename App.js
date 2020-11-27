import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import store from './store'

import HomeScreen from './src/screens/HomeScreen'
import SecondScreen from './src/screens/SecondScreen'
import { Button } from 'react-native'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Lista" component={HomeScreen} />
          <Stack.Screen name="Agregar" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
