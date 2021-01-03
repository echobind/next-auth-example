import { Box, Flex, Link } from '@chakra-ui/react';
import { signOut } from 'next-auth/client';

export const LoggedOutNavbar = () => <Navbar />;

export const LoggedInNavbar = () => (
  <Navbar>
    <Link href='/dashboard' mr={4}>
      My Dashboard
    </Link>
    <Link onClick={signOut}>Log out</Link>
  </Navbar>
);

export const Navbar = ({ children }) => (
  <Flex
    w='100%'
    bg='green.800'
    px={5}
    py={4}
    color='white'
    justifyContent='space-between'
    alignItems='center'
  >
    <Flex flexDirection='row' justifyContent='center' alignItems='center'>
      <Link href='/'>Next.js Auth & Access Control Demo</Link>
    </Flex>
    <Box>{children}</Box>
  </Flex>
);

export const NavbarWithLoginState = ({ session }) =>
  session ? <LoggedInNavbar /> : <LoggedOutNavbar />;

export default Navbar;
