import React from 'react';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';
import {FooterContainer, IconView} from './styles';

interface FooterProps {
  handleDownloadImage(): void;
}

const Footer: React.FC<FooterProps> = ({handleDownloadImage}) => {
  return (
    <FooterContainer>
      <LikeButton />
      <IconView name="share-social" size={32} />
      <DownloadButton handleDownloadImage={handleDownloadImage} />
    </FooterContainer>
  );
};

export default Footer;
