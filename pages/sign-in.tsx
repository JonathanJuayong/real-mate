import {
  Button,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

const SignIn: React.FC<{}> = () => {
  const bg = "url(/bg-desktop-1.png) center bottom no-repeat"
  const logoHeight = 50;
  const fontSize = 1;
  return (
    <Grid
      m="0"
      pt="4em"
      pb="10em"
      px={["0", "0", "8em", "15em"]}
      bg={bg}
      minH="100vh"
    >
      <Grid
        py="2em"
        bg="rgba(255, 255, 255, 0.7)"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        gap="1em"
      >
        <GridItem>
          <Image
            src="/logo.svg"
            alt="real simple"
            height={logoHeight}
            width={logoHeight * 3.42}
            priority
          />
          <Text mt="-1em" fontSize={`${fontSize}rem`}>
            the simple cms for real estate agents
          </Text>
        </GridItem>
        <GridItem justifySelf="center">
          <Text
            fontSize={`${fontSize}rem`}
          >
            sign in
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Button colorScheme="red" w="100%">
            google
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button colorScheme="blue" w="100%">
            facebook
          </Button>
        </GridItem>
      </Grid>
    </Grid>
  )
}

export default SignIn;