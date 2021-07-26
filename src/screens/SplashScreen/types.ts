import { PersistorStateType } from '../../redux/store/persistor/types';
import { UserStateType } from '../../redux/store/user/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { SplashScreenParamList } from '../../navigation/types';

type SplashScreenNavigationProp = StackNavigationProp<
  SplashScreenParamList,
  'SplashScreen'
>;

export type SplashScreenPropsType = {
  persistor: PersistorStateType;
  user: UserStateType;
  navigation: SplashScreenNavigationProp;
};

export type SplashScreenStateType = {
  timeCompleted: boolean;
};
