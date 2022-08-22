import styled from '@emotion/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const CardHeight = `${Math.floor(windowHeight / 4)}px`;
const ImageHeight = `${Math.floor(((windowHeight / 4) * 7) / 9)}px`;

export const MainContainer = styled.SafeAreaView`
  background-color: ${props => props.theme.blockquotebg};
  flex: 1;
`;

export const GridSView = styled.View`
  margin-right: -15px;
  padding-horizontal: 16px;
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${props => props.theme.background};
  height: ${CardHeight};
  margin-right: 15px;
  flex-basis: 40%;
  flex-grow: 1;
  border-radius: 15px;
  margin-top: 10px;
  position: relative;
  padding: 5px;
  elevation: 1;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: ${ImageHeight};
  margin: 0 auto;
  border-radius: 15px;
`;

export const BreedName = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-family: Poppins-Medium;
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.text};
`;

export const HeaderContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex-direction: row;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 5px;
`;

export const LoaderView = styled.View`
  width: 90%;
  margin: 20px auto;
`;

export const LoaderActivity = styled.ActivityIndicator`
  color: ${props => props.theme.primary};
  align-items: center;
  justify-content: center;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-family: Poppins-Bold;
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  margin-left: 16px;
`;
