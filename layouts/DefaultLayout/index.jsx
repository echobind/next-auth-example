import { Box } from '@chakra-ui/react';
import { NavbarWithLoginState } from '../../components/Navbar';
import { useSession } from 'next-auth/client';

export const DefaultLayout = ({ children }) => {
  const [session] = useSession();

  return (
    <Box>
      <NavbarWithLoginState session={session} />
      {children}
    </Box>
  );
};

export default DefaultLayout;
