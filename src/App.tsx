/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import styled from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import {Provider} from 'react-redux';

import {themeDark, themeLight} from './theme/theme';
import Navigator from './Navigator';
import store from './store';

const Container = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
`;

const SafeArea = styled.SafeAreaView`
  background-color: ${props => props.theme.background};
  flex: 1;
`;

const App = () => {
  const isDark = useColorScheme() === 'dark';
  const [isDarkMode] = useState(isDark);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <SafeArea>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={
              isDarkMode ? themeDark.background : themeLight.background
            }
          />
          <Container>
            <Navigator />
          </Container>
        </SafeArea>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
