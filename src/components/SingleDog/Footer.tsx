import React from 'react';
import {TouchableOpacity} from 'react-native';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';
import {FooterContainer, IconView} from './styles';

interface FooterProps {
  handleDownloadImage(): void;
  handleShare(): void;
}

const Footer: React.FC<FooterProps> = ({handleDownloadImage, handleShare}) => {
  return (
    <FooterContainer>
      <LikeButton />
      <TouchableOpacity onPress={handleShare}>
        <IconView name="share-social" size={32} />
      </TouchableOpacity>
      <DownloadButton handleDownloadImage={handleDownloadImage} />
    </FooterContainer>
  );
};

export default Footer;
