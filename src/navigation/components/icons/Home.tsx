import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconElementPropsType } from './types';

const HomeIcon: React.FunctionComponent<IconElementPropsType> = ({
  active = false,
  size = 20,
}) => {
  const color = active ? '#fff' : '#000';
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G data-name="Grupo 10552">
        <G
          data-name="Grupo 8"
          fill={color}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}>
          <Path
            data-name="Trazado 57"
            d="M3.463 7.39v10.3h3.97v-7.1h5.729v7.1h4.081V7.39L10.56 1.044z"
          />
          <Path data-name="Trazado 65" d="M1.409 9.328L10.566 1l8.6 8" />
        </G>
      </G>
    </Svg>
  );
};

export default HomeIcon;
