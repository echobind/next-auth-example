import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link,
} from '@chakra-ui/react';
import { signIn } from 'next-auth/client';

export const UnauthorizedContent = () => (
  <Alert status='error'>
    <AlertIcon />
    <AlertTitle mr={2}>You must be logged in to see this content.</AlertTitle>
    <AlertDescription>
      Please{' '}
      <Link onClick={signIn}>
        <u>sign in now</u>
      </Link>
      .
    </AlertDescription>
  </Alert>
);
