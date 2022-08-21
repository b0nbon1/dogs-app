import React from 'react';
import {
  Button,
  ButtonText,
  Container,
  Description,
  DetailsContainer,
  ImageView,
  Title,
} from './styles';

export const OnBoardingView = ({onClickContinue}) => {
  return (
    <Container>
      <ImageView source={require('./images/dog1.jpg')} />
      <DetailsContainer>
        <Title>Discover and learn more about dog breeds</Title>
        <Description>
          View all dog breeds and also awesome random dog pictures that we have
        </Description>
        <Button onPress={onClickContinue}>
          <ButtonText>Continue Home</ButtonText>
        </Button>
      </DetailsContainer>
    </Container>
  );
};
