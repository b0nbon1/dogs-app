import React, {useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import Share from 'react-native-share';
import {MainContainer} from '../components/Homepage/styles';
import SingleDogPicView from '../components/SingleDog';
import Footer from '../components/SingleDog/Footer';
import Header from '../components/SingleDog/Header';
import {downloadFile} from '../utils/downloadFile';
import getBreedsName from '../utils/getDogsBreed';

const SingleDogScreen = ({route, navigation}: any) => {
  const [widthImage, setWidth] = useState(0);
  const [heightImage, setHeight] = useState(0);

  const {imageUrl} = route.params;
  const BreedName = getBreedsName(imageUrl);

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

  const shareOptions = {
    title: 'Awesome dog breed',
    url: imageUrl,
    message: `Please checkout this dog picture from breed ${BreedName}`,
  };

  const handleShare = () => {
    Share.open(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <MainContainer>
      <Header url={imageUrl} goBack={goBack} BreedName={BreedName} />
      <SingleDogPicView
        heightImage={heightImage}
        widthImage={widthImage}
        imageUrl={imageUrl}
      />
      <Footer
        handleDownloadImage={handleDownloadImage}
        handleShare={handleShare}
      />
    </MainContainer>
  );
};

export default SingleDogScreen;
