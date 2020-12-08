import { Grid, GridItem, Text } from '@chakra-ui/react';
import { PropertyCard } from '../../../components';
import { theme } from '../../../lib/theme';

const Properties = () => {
  return (
    <>
      <Text
        as="h1"
        fontFamily={theme.fonts.branding.header}
        fontWeight="700"
      >
        properties:
      </Text>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
        gap="1em"
      >
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
      </Grid>
    </>
  )
}

export default Properties