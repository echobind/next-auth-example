import { Box, Flex, Link } from '@chakra-ui/react';

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
      <Link pl={3} color='white' href={'/'}>
        Next.js Auth & Access Control Demo
      </Link>
    </Flex>
    <Box>{children}</Box>
  </Flex>
);

export default Navbar;
