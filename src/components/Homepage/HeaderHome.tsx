import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderContainer, TitleText} from './styles';

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <Icon name="paw-sharp" size={50} />
      <TitleText>Dogs Breed App</TitleText>
    </HeaderContainer>
  );
};

export default HeaderHome;
