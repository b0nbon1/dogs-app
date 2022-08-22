import React from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import {Pressable, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@emotion/react';

interface DownloadButtonProps {
  handleDownloadImage(): void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  handleDownloadImage,
}) => {
  const downloaded = useSharedValue(0);
  const theme = useTheme();

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            downloaded.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: downloaded.value,
        },
      ],
      opacity: downloaded.value,
    };
  });

  const handleDownload = async () => {
    await handleDownloadImage();
    (downloaded as any).value = withSpring(1);
  };

  return (
    <Pressable onPress={handleDownload}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={'download-outline'}
          size={32}
          color={theme.text}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons
          name={'download'}
          size={32}
          color={theme.primary}
        />
      </Animated.View>
    </Pressable>
  );
};

export default DownloadButton;
