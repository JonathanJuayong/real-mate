import { Grid, GridItem, Text, Box, Image, Skeleton, IconButton } from '@chakra-ui/react';
import { theme } from '../lib/theme';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';

export const ImageGallery: React.FC<{ imagesArray: Array<{ type: string, url: string }> }> = ({ imagesArray }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageShown, setImageShown] = useState<string>("");
  const hoverStyle = {
    border: `2px solid ${theme.colors.blue[900]}`
  }
  return (
    <>
      {isOpen && (
        <>
          <Box className="overlay"
            minH="100vh"
            minW="100vw"
            position="fixed"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg="rgba(0,0,0,.7)"
            zIndex="2"
            onClick={() => setIsOpen(false)}
            ></Box>
          <Box className="image"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="3"
            margin="0 auto"
          >
            <Image
              w="100%"
              src={imageShown}
            />
          </Box>
        </>
      )}
      <Grid className="gallery"
        gap="1em"
        h="100vh"
        w="500px"
      >
        <Text>images:</Text>
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="1em"
        >
          <Grid
            w="234px"
            h="176px"
            border="2px solid transparent"
            _hover={hoverStyle}
            justifyItems="center"
            alignItems="center"
            cursor="pointer"
            fontSize="3em"
          >
            <BiPlusCircle />
          </Grid>
          {imagesArray.map(image => (
            <GridItem
              key={image.type}
              border="2px solid transparent"
              _hover={hoverStyle}
              transition="border 0.2s"
              cursor="pointer"
              onClick={() => { setIsOpen(true); setImageShown(image.url) }}
              display="inline-block"
            >
              <Image
                w="100%"
                fallback={<Skeleton w="234px" h="176px"/>}
                src={image.url}
                htmlWidth={150}
                htmlHeight={150}
              />
            </GridItem>
          ))}
        </Grid>
      </Grid>

    </>
  )
}