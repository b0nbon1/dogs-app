import React, {useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import {MainContainer} from '../components/Homepage/styles';
import SingleDogPicView from '../components/SingleDog';
import Footer from '../components/SingleDog/Footer';
import Header from '../components/SingleDog/Header';
import {downloadFile} from '../utils/downloadFile';

const SingleDogScreen = ({route, navigation}: any) => {
  const [widthImage, setWidth] = useState(0);
  const [heightImage, setHeight] = useState(0);

  const {imageUrl} = route.params;

  const handleDownloadImage = async () => {
    await downloadFile(imageUrl);
  };

  useEffect(() => {
    Image.getSize(imageUrl, (width: number, height: number) => {
      // calculate image width and height with fullwidth ratio
      const screenWidth = Dimensions.get('window').width;
      const scaleFactor = width / screenWidth;
      const imageHeight = height / scaleFactor;
      setWidth(screenWidth);
      setHeight(imageHeight);
    });
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header url={imageUrl} goBack={goBack} />
      <SingleDogPicView
        heightImage={heightImage}
        widthImage={widthImage}
        imageUrl={imageUrl}
      />
      <Footer handleDownloadImage={handleDownloadImage} />
    </MainContainer>
  );
};

export default SingleDogScreen;
