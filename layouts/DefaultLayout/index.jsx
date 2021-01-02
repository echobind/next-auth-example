import { Center, Box } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar';

export const DefaultLayout = ({ children }) => (
  <Box>
    <Navbar />
    {children}
  </Box>
);

export default DefaultLayout;
