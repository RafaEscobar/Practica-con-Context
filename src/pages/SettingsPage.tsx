import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsPage = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext)

  return (
    <View style={{...styles.marginGlobal, marginTop: insets.top}}>
        <Text style={styles.titleGlobal}>Aqui van los ajustes</Text>
        <Text style={{color: 'black'}}>{ JSON.stringify(authState, null, 4) }</Text>
    </View>
  )
}
