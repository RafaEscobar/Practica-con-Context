import React from 'react'
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { StackNavigator } from './StackNavigator';
import { paletColor } from '../theme/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

//* Generamos el arrowFunction
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    
      sceneAnimationEnabled={true}
      shifting={true}
      barStyle={{backgroundColor: paletColor.neutral, height: 70}}
      activeColor='blue'
      inactiveColor='gray'
          
        screenOptions={
          ({route}) => ({
            tabBarIcon: ({ color }) => {
              let my_icon='';
              switch(route.name){
                case 'Pagina1TabScreen': 
                  my_icon = 'document-outline';
                break;
                case 'TopTap': 
                  my_icon = 'ellipsis-horizontal-outline';
                break;
                case 'StackNavigator':
                  my_icon = 'layers-outline';
                break;
              }
              return <Icon name={my_icon} size={20} color={color} />
            }
      })}
    >
      <Tab.Screen name='Pagina1TabScreen' options={{ tabBarLabel: 'Pagina 1' }} component={Pagina1TabScreen}/>
      <Tab.Screen name='TopTap' options={{ tabBarLabel: 'TopTap' }} component={TopTabNavigator}/>
      <Tab.Screen name='StackNavigator' options={{ tabBarLabel: 'Stack' }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
