import styled, { css } from 'styled-components/native';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { Business } from './index';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

export const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 0,
    marginLeft: 20,
    marginRight: 20,
  },
});

// #region Header

export const Header = styled.View`
  padding: 70px 34px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: #a58328;
  font-size: 32px;
  font-family: Roboto-Bold;
`;

// #endregion

// #region TopCards

export const TopCardContainer = styled(LinearGradient)`
  margin: 0;
  padding: 10px 0px 0px 20px;
  flex-direction: row;
  align-items: center;
`;

export const TopCardList = styled(FlatList as new () => FlatList<Business>)`
  padding: 0px 0px 0px 10px;
`;

export const TopCardText = styled.Text`
  color: #fff;
`;

export const TopCard = styled.View`
  width: 68px;
  height: 68px;
  margin: 10px 15px 40px 0px;
  background: #2f2f2f;
  border-radius: 13px;
  padding: 10px;
`;

// #endregion

// #region Business Feed

export const BusinessList = styled(FlatList as new () => FlatList<Business>)`
  padding: 0px 0px 40px 0px;
  margin-top: 15px;
`;

export const BusinessCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BusinessCard = styled(RectButton)`
  margin: 0px 20px 20px 20px;
  height: 212px;
  color: #fff;
  border-radius: 13px;
`;

export const BusinessDataContainer = styled.View`
  margin: 0;
  padding: 0;
`;

export const BusinessText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 29px;
  color: white;
  margin: 10px 10px 0px 20px;
`;

export const BusinessSubtitleText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  color: #a58328;
  margin: 0px 10px 20px 20px;
`;

export const BusinessCardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

// #endregion
