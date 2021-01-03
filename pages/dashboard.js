import { Badge, Flex, Heading, Stack } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Flex
      direction='column'
      align='center'
      justifyContent='center'
      minHeight='80vh'
    >
      <Heading mb={3}>My Dashboard</Heading>

      <Stack>
        <Badge mb={2}>Things</Badge>
        <Badge mb={2} colorScheme='green'>
          Stuff
        </Badge>
        <Badge mb={2} colorScheme='red'>
          Foo
        </Badge>
        <Badge mb={2} colorScheme='purple'>
          Bar
        </Badge>
        <Badge mb={2} colorScheme='blue'>
          Baz
        </Badge>
      </Stack>
    </Flex>
  );
}
