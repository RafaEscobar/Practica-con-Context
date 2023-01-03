import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { NativeBaseProvider } from 'native-base';
import { AppAuthContext } from './src/context/AppAuthContext';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    //! 0) Envolvemos todo en el -NativeBaseProvider-
    <NativeBaseProvider>
        <NavigationContainer>
          <AppAuthContext>
            <DrawerNavigator />
          </AppAuthContext>
        </NavigationContainer>
    </NativeBaseProvider>
  );
};
 