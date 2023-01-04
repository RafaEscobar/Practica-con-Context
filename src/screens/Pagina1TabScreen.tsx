import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Box } from 'native-base';
import { TouchableIcon } from '../components/TouchableIcon';

export const Pagina1TabScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>BotttomTab Pagina #1</Text>
        <Box style={{ flexDirection: 'row' }}>
          <TouchableIcon iconName="airplane-outline" iconSize={40} />
          <TouchableIcon iconName="business-outline" iconSize={60} />
        </Box>
    </View>
  )
}