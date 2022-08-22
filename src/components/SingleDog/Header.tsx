import React from 'react';
import {View} from 'react-native';
import {IconView, BreedText, HeaderContainer, BackButton} from './styles';

interface HeaderProps {
  url: string;
  goBack(): void;
  BreedName: string;
}

const Header: React.FC<HeaderProps> = ({goBack, BreedName}) => {
  return (
    <HeaderContainer>
      <BackButton onPress={goBack}>
        <IconView name="md-arrow-back" size={30} />
      </BackButton>
      <BreedText>{BreedName}</BreedText>
      <View />
    </HeaderContainer>
  );
};

export default Header;
