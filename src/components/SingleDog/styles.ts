import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MainContainer = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  elevation: 1;
  margin-top: 0;
  background-color: ${props => props.theme.background};
  height: 60px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconView = styled(Icon)`
  color: ${props => props.theme.text};
`;

export const BreedText = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  font-family: Poppins-Medium;
  flex: 2;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const FooterContainer = styled.View`
  elevation: 1;
  margin-top: 0;
  background-color: ${props => props.theme.background};
  height: 60px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
