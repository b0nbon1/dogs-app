import {Platform} from 'react-native';
import RNFetchBlob, {RNFetchBlobConfig} from 'rn-fetch-blob';

export const downloadFile = async (downloadUrl: string) => {
  const signalError = () => {
    console.error('failed to download image');
  };

  const signalSuccess = () => {
    console.log('Succesful download');
  };

  try {
    const {
      dirs: {DownloadDir, DocumentDir},
    } = RNFetchBlob.fs;
    const isIOS = Platform.OS === 'ios';
    const directoryPath = Platform.select({
      ios: DocumentDir,
      android: DownloadDir,
    });
    const splittedUrl = downloadUrl.split('.');
    const fileExt = splittedUrl[splittedUrl.length - 1];
    const splittedName = splittedUrl[splittedUrl.length - 2].split('/');
    const fileName = splittedName[splittedName.length - 1];
    const filePath = `${directoryPath}/${fileName}`;
    var mimeType = '';

    if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg') {
      mimeType = 'image/*';
    }
    if (fileExt === 'pdf') {
      mimeType = 'application/pdf';
    }
    if (fileExt === 'avi' || fileExt === 'mp4' || fileExt === 'mov') {
      mimeType = 'video/*';
    }

    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: filePath,
        appendExt: fileExt,
        notification: true,
      },
      android: {
        fileCache: true,
        appendExt: fileExt,
        addAndroidDownloads: {
          useDownloadManager: true,
          mime: mimeType,
          title: fileName,
          mediaScannable: true,
          notification: true,
        },
      },
    });

    RNFetchBlob.config(configOptions as RNFetchBlobConfig)
      .fetch('GET', downloadUrl)
      .then(resp => {
        console.log(resp);
        signalSuccess();
        if (isIOS) {
          RNFetchBlob.ios.openDocument(resp.data);
        }
      })
      .catch(e => {
        signalError();
        console.log('fetch error: ', e);
      });
  } catch (error) {
    console.log('general error: ', error);
  }
};
