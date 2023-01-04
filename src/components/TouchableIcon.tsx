import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { paletColor } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
    iconSize: number,
}

export const TouchableIcon = ({ iconName, iconSize }:Props) => {

    const { changeFavIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity
        onPress={() => changeFavIcon(iconName)}
    >
        <Icon name={ iconName } size={ iconSize } color={paletColor.tertiary} />
    </TouchableOpacity>
  )
}
