import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'Extra'>{};

export const PaginaExtraScreen = ({route}: Props) => {

  const params = route.params;

  //? 6=> Hacer uso del Context con el hook -useContext-
  const { changeName } = useContext(AuthContext)
  //? 7=> Generar el useEffect para disparar el llamado a la funcion pasando por parametro el valor del Prop.name, al momento de abrir esta pantalla. 
  useEffect(() => {changeName(params.nombre)}, []);
  
  return (
    <View style={{backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 20, color: 'black'}}>ID: { params.id}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Nombre: { params.nombre }</Text>
    </View>
  )
}
