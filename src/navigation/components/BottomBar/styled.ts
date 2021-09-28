import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const TabBarSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  background-color: #fff;
`;

export const TabBarView = styled.View`
  width: 100%;
  max-width: 600px;
  height: 60px;
  padding-bottom: 5px;
  background-color: #fafafafa;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.29);
  elevation: 30;
  border-top-color: #666;
  border-left-color: #666;
  border-right-color: #666;
  border-bottom-color: #999;
  border-top-width: 0.5;
  border-left-width: 0.5;
  border-right-width: 0.5;
  border-bottom-width: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TabItemView = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TabItemSelector = styled.View`
  width: 90%;
  height: 5px;
  background-color: #fafafafa;
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 5%;
`;
