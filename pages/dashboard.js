import React, { useState, useEffect } from 'react'
import { Badge, Flex, Heading, Stack } from '@chakra-ui/react';
import { getSession } from 'next-auth/client';

const fetchThings = async () => {
  const response = await fetch('/api/dashboard', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });
  const json = await response.json();

  if (!response.ok) {
    throw json
  }

  return json;
}

export default function Dashboard() {
  const [things, setThings] = useState([]);

  useEffect(() => {
    fetchThings().then(things => {
      setThings(things)
    });
  }, [])

  return (
    <Flex
      direction='column'
      align='center'
      justifyContent='center'
      minHeight='80vh'
    >
      <Heading mb={3}>My Dashboard</Heading>

      <Stack>
        {things.map((thing) => {
          return (
            <Badge mb={2} colorScheme={thing.colorScheme} key={thing.value}>
              {thing.value}
            </Badge>
          )
        })}
      </Stack>
    </Flex>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  };
}
