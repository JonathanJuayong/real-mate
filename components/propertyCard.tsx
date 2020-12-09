import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { PropertyCardProps } from './';
import { FiMapPin } from 'react-icons/fi';
import { BiBath, BiBed } from 'react-icons/bi';
import { theme } from '../lib/theme';


export const PropertyCard: React.FC<PropertyCardProps> = ({
  name, city, price, bed, bath, thumbnail, empty
}) => {
  return (
    <Grid
      border={`2px solid ${theme.colors.blue[900]}`}
      justifyContent="center"
      p="0"
      m="0"
    >
      <GridItem className="card image">
        <Image
          width={278}
          height={209}
          src={thumbnail}
        />
      </GridItem>
      <Grid className="card details container" gap=".8em" p="1em">
        <Grid
          className="card address"
          gridAutoFlow="column"
          alignItems="center"
          justifyItems="start"
          justifyContent="start"
          gap=".4em"
        >
          <GridItem>
            <FiMapPin />
          </GridItem>
          <GridItem>
            <Text isTruncated fontSize="1rem">{city}</Text>
          </GridItem>
        </Grid>
        <Grid className="card name and price">
          <GridItem>
            <Text isTruncated fontFamily={theme.fonts.branding.header}>{name}</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="1rem">php {price}</Text>
          </GridItem>
        </Grid>
        <Grid
          className="card bed and bath"
          gridAutoFlow="column"
        >
          <Grid 
            gridAutoFlow="column" 
            justifyContent="start"
            justifyItems="start"
            gap=".4em"
          >
            <BiBath />
            <Text fontSize="1rem">{bath}</Text>
          </Grid>
          <Grid 
            gridAutoFlow="column" 
            justifyContent="start"
            justifyItems="start"
            gap=".4em"
          >
            <BiBed />
            <Text fontSize="1rem">{bed}</Text>
          </Grid>
        </Grid>
        <GridItem className="card btn" mt="1em">
          <Button
            bg={theme.colors.blue[900]}
            w="100%"
            color="white"
            fontWeight="300"
            borderRadius="0px"
          >
            view more details
          </Button>
        </GridItem>
      </Grid>
    </Grid>
  )
}