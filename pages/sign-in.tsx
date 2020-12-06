import {
  Button,
  Grid,
  GridItem,
  Text,
  theme,
} from '@chakra-ui/react';
import Image from 'next/image';

const SignIn: React.FC<{}> = () => {
  const bg = theme.colors.gray[200];
  // const bg = "url(/bg-desktop-1.png) center bottom"
  const logoHeight = 55;
  const fontSize = 1;
  return (
    <Grid
      m="0"
      bg={bg}
      minH="100vh"
      justifyItems="center"
    >
      <Grid
        m="3em"
        h="350px"
        w="320px"
        py="2em"
        bg="rgba(255, 255, 255, 0.8)"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        gap=".8em"
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
          <Button fontWeight="400" colorScheme="red" w="100%">
            google
          </Button>
        </GridItem>
        <GridItem w="100%">
          <Button fontWeight="400" colorScheme="blue" w="100%">
            facebook
          </Button>
        </GridItem>
      </Grid>
    </Grid>
  )
}

export default SignIn;