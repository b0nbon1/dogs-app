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

const LikeButton = () => {
  const liked = useSharedValue(0);
  const theme = useTheme();

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={'heart-outline'}
          size={32}
          color={theme.text}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons name={'heart'} size={32} color={'red'} />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;
