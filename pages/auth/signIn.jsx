import React from 'react';
import { providers, signIn } from 'next-auth/client';
import { Button, Flex } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const icons = {
  github: <FaGithub />,
  google: <FcGoogle />,
};

export default function SignIn({ providers }) {
  return (
    <Flex align='center' justify='center' direction='column' minHeight='80vh'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            size='lg'
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
              })
            }
            mb={3}
            leftIcon={icons[provider.id]}
          >
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
    </Flex>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
