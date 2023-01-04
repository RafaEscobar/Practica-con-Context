import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { paletColor, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsPage = () => {

  const insets = useSafeAreaInsets();

  const { authState, authState:{favoriteIcon} } = useContext(AuthContext);

  return (
    <View style={{...styles.marginGlobal, marginTop: insets.top}}>
        <Text style={styles.titleGlobal}>Aqui van los ajustes</Text>
        <Text style={{color: 'black'}}>{ JSON.stringify(authState, null, 4) }</Text>

        {
          favoriteIcon ? <Icon name={favoriteIcon} size={30} color={paletColor.tertiary} /> : null
        }
    </View>
  )
}
