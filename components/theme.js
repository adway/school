export default {
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'hsl(240, 100%, 57%)',
    secondary: 'hsl(260, 100%, 57%)',
    accent: 'hsl(280, 100%, 57%)',
    muted: '#f9f9fc',
    gray: '#555',
    construction: '#ff8c37',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0ff',
        secondary: '#0fc',
        accent: '#f0f',
        muted: '#111',
        gray: '#888',
      },
    },
  },

  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  fontSizes: [16, 18, 20, 24, 32, 48, 64, 72, 96],
  sizes: {
    container: 900,
    wide: 1280,
  },
  text: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    small: {
      fontSize: 0,
    },
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 1,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
    },
    a: {
      color: 'primary',
      ':hover': {
        color: 'secondary',
      },
    },
    p: {
      textAlign: 'justify',
    },
  },
  h1: {
    variant: 'text.heading',
    fontSize: 3,
  },
  h2: {
    variant: 'text.heading',
    fontSize: 2,
  },
  h3: {
    variant: 'text.heading',
    fontSize: 1,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  navlink: {
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary',
    },
  },
};
