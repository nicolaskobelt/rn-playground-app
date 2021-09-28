import React from 'react';
import { BottomBarPropsType, TabItemPropsType } from './types';
import {
  TabBarSafeAreaView,
  TabBarView,
  TabItemView,
  TabItemSelector,
} from './styled';

import HomeIcon from '../icons/Home';
import ProfileIcon from '../icons/Profile';

const BottomBar: React.FunctionComponent<BottomBarPropsType> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <>
      <TabBarView>
        {state.routes.map(
          (route: { key: string; name: string }, index: number) => {
            const { options } = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TabItemView
                key={`key-${index}`}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}>
                <TabItem route={route} focused={isFocused} />
              </TabItemView>
            );
          },
        )}
      </TabBarView>
      <TabBarSafeAreaView />
    </>
  );
};

const TabItem: React.FunctionComponent<TabItemPropsType> = ({
  route,
  focused,
}) => {
  let Icon;
  switch (route.name) {
    case 'home':
      Icon = HomeIcon;
      break;

    case 'profile':
      Icon = ProfileIcon;
      break;
  }

  if (Icon) {
    return (
      <>
        <Icon active={focused} />
        {focused && <TabItemSelector />}
      </>
    );
  } else {
    return null;
  }
};

export default BottomBar;
