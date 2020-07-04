import * as React from 'react';
import NextApp from 'next/app';
import theme from '../components/theme';
import { ThemeProvider } from 'theme-ui';
import Nav from '../components/nav';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
