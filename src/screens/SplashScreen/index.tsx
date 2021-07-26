import React from 'react';
import { SplashScreenPropsType, SplashScreenStateType } from './types';
import configs from '../../configs';

class SplashScreen extends React.Component<
  SplashScreenPropsType,
  SplashScreenStateType
> {
  state = {
    timeCompleted: false,
  };

  componentDidMount() {
    this.waitSplashScreenShowingTime();
  }

  componentDidUpdate() {
    if (!this.props.persistor.loading && this.state.timeCompleted) {
      this.handleSplashScreenHidding();
    }
  }

  handleSplashScreenHidding = () => {
    const { navigation } = this.props;
    navigation.replace('App');
  };

  waitSplashScreenShowingTime = () =>
    setTimeout(() => {
      this.setState({ timeCompleted: true });
    }, configs.SPLASH_SCREEN_TIME_MILLIS);

  render() {
    return <></>;
  }
}

export default SplashScreen;
