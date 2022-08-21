import React from 'react';
import {OnBoardingView} from '../components/onboarding';

interface OnBoardingProps {
  navigation: any;
}

export const OnBoarding: React.FC<OnBoardingProps> = ({navigation}) => {
  const handleContinueHome = () => {
    navigation.navigate('Home');
  };
  return <OnBoardingView onClickContinue={handleContinueHome} />;
};
