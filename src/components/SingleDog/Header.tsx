import React from 'react';
import {View} from 'react-native';
import getBreedsName from '../../utils/getDogsBreed';
import {IconView, BreedText, HeaderContainer, BackButton} from './styles';

interface HeaderProps {
  url: string;
  goBack(): void;
}

const Header: React.FC<HeaderProps> = ({url, goBack}) => {
  const BreedName = getBreedsName(url);
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
