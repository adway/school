import { useColorMode } from 'theme-ui';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Image,
  Flex,
  NavLink,
} from '@theme-ui/components';
import Link from 'next/link';
import { Zap } from 'react-feather';

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'text',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none',
      },
      ...sx,
    }}
  />
);

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode();
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title='Change Color Scheme'
    >
      <Zap size={24} />
    </NavButton>
  );
};

export default () => (
  <Box
    as='nav'
    sx={{
      color: 'text',
      py: 4,
    }}
    key='nav'
  >
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        a: {
          fontSize: 1,
          color: 'text',
          fontWeight: 'body',
          textDecoration: 'none',
          mr: [3],
          ':focus,:hover': { color: 'primary' },
        },
      }}
    >
      <Link href='/' passHref>
        <Flex
          as='a'
          sx={{
            alignItems: 'center',
            mr: 'auto !important',
          }}
        >
          <NavLink
            as='span'
            sx={{
              display: 'inline-block',

              ':focus,:hover': { color: 'primary' },
            }}
          >
            school.adway.io
          </NavLink>
        </Flex>
      </Link>
      <ColorSwitcher />
    </Container>
  </Box>
);
