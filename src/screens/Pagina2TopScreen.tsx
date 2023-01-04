import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { Button } from 'native-base';

export const Pagina2TopScreen = () => {

  const { singIn } = useContext(AuthContext)

  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>NUMERO #2</Text>
        <Button onPress={singIn}>Dar click</Button>
    </View>
  )
}
