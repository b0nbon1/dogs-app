import styled from '@emotion/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const imageHeight = Math.floor(windowHeight / 2);
const textContainerWidth = `${Math.floor((windowWidth * 3) / 4)}px`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.blockquotebg};
`;

export const ImageView = styled.Image`
  height: ${imageHeight}px;
  width: 100%;
  margin-bottom: -30px;
`;

export const DetailsContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  border-radius: 25px 25px 0px 0px;
  align-items: center;
  padding-top: 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 32px;
  font-family: Poppins-Medium;
  text-align: center;
  color: ${props => props.theme.text};
  width: ${textContainerWidth};
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-family: Poppins-Light;
  text-align: center;
  width: ${textContainerWidth};
  color: ${props => props.theme.text};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  padding: 15px;
  border-radius: 25px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: Poppins-Light;
`;
