import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
import { IconElementPropsType } from './types';

const ProfileIcon: React.FunctionComponent<IconElementPropsType> = ({
  active = false,
  size = 20,
}) => {
  const color = active ? '#fff' : '#000';
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G data-name="Grupo 10558">
        <G
          data-name="Grupo 8323"
          transform="translate(2 1)"
          fill={color}
          strokeLinejoin="round">
          <Circle
            data-name="Elipse 350"
            cx={3.605}
            cy={3.605}
            r={3.605}
            transform="translate(2.5)"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <G data-name="Trazado 7250">
            <Path d="M6.367 8.672C3.425 8.672-.002 11.057-.002 14h12.739c0-2.943-3.426-5.328-6.37-5.328z" />
            <Path
              d="M6.369 8.672C3.426 8.672 0 11.057 0 14h12.737c0-2.943-3.426-5.328-6.368-5.328m0-2c1.905 0 3.92.725 5.525 1.99C13.7 10.083 14.737 12.03 14.737 14a2 2 0 01-2 2H0a2 2 0 01-2-2C-2 12.03-.964 10.084.844 8.66c1.605-1.264 3.619-1.989 5.525-1.989z"
              fill="#000"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default ProfileIcon;
