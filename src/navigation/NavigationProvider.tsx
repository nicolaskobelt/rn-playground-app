import React, { useRef, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const AppContainer: React.FunctionComponent = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  const getActiveRouteName = useCallback(state => {
    const route = state.routes[state.index];

    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state);
    }

    return route.name;
  }, []);

  React.useEffect(() => {
    const state = navigationRef?.current?.getRootState();

    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, [getActiveRouteName]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK
          console.log(`Current screen name: ${currentRouteName}`);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}>
      <Navigator />
    </NavigationContainer>
  );
};

export default AppContainer;
