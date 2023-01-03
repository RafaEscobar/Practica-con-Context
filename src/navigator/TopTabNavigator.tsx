import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import { Pagina1TopScreen } from '../screens/Pagina1TopScreen';
import { Pagina2TopScreen } from '../screens/Pagina2TopScreen';
import { Pagina3TopScreen } from '../screens/Pagina3TopScreen';

const TTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    //! 11) Abrimos un TTab.Navigator
    <TTab.Navigator
      screenOptions={
        ({route}) => ({
        tabBarPressColor: 'blue',
        tabBarShowIcon: true,
        tabBarLabelStyle:{
          fontSize: 12,
          fontWeight: 'bold'
        },
        tabBarIndicatorStyle:{
          backgroundColor: 'black'
        },
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color}) => {

          let my_icon='';
        
          switch(route.name){
            case 'Pagina1': 
              my_icon = 'game-controller-outline';
            break;
            case 'Pagina2': 
              my_icon = 'cloudy-night-outline';
            break;
            case 'Pagina3':
              my_icon = 'finger-print-outline';
            break;
          }

          return <Icon name={my_icon} size={25} color={color} />
        }
      })}
      sceneContainerStyle={{ backgroundColor: 'white',  }}
    >
        <TTab.Screen name='Pagina1' options={{ tabBarLabel:'Ventana 1' }} component={Pagina1TopScreen}/>
        <TTab.Screen name='Pagina2' options={{ tabBarLabel:'Ventana 2' }} component={Pagina2TopScreen}/>
        <TTab.Screen name='Pagina3' options={{ tabBarLabel:'Ventana 3' }} component={Pagina3TopScreen}/>
    </TTab.Navigator>
  )
}
