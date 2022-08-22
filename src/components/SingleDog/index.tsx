import React from 'react';
import {Image} from 'react-native';
import {ImageContainer} from './styles';

interface SingleDogPicViewProps {
  heightImage: number;
  widthImage: number;
  imageUrl: string;
}

const SingleDogPicView: React.FC<SingleDogPicViewProps> = ({
  heightImage,
  widthImage,
  imageUrl,
}) => {
  return (
    <ImageContainer>
      <Image
        style={{width: widthImage, height: heightImage}}
        source={{uri: imageUrl}}
      />
    </ImageContainer>
  );
};

export default SingleDogPicView;
