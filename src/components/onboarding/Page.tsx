import React from 'react';
import {Container, ImageView} from './styles';

const Page = () => {
  return (
    <Container>
      <ImageView source={require('./images/dog1.png')} />
      {/* <View style={{flex: 1}} /> */}
    </Container>
  );
};

export default Page;
