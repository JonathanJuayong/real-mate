import { Grid, GridItem, IconButton, Text } from '@chakra-ui/react';
import { PropertyCard } from '../../../components';
import { theme } from '../../../lib/theme';
import { BiPlusCircle } from 'react-icons/bi';

const Properties: React.FC = () => {
  const properties = [
    {
      name: "laureano di trevi",
      city: "makati, metro manila",
      price: 4200000,
      bed: 2,
      bath: 2,
      thumbnail: "/test/house1.png"
    },
    {
      name: "avida towers asten, taft",
      city: "makati, metro manila, national capital region",
      price: 4200000,
      bed: 2,
      bath: 2,
      thumbnail: "/test/house2.png"
    },
    {
      name: "laureano di trevi",
      city: "makati, metro manila",
      price: 4200000,
      bed: 2,
      bath: 2,
      thumbnail: "/test/house3.png"
    },
    {
      name: "laureano di trevi",
      city: "makati, metro manila",
      price: 4200000,
      bed: 2,
      bath: 2,
      thumbnail: "/test/house4.png"
    },
  ];
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
        gridTemplateColumns="repeat(auto-fit, 278px)"
        gap="1em"
      >
        {properties.map((item, i) => (
          <PropertyCard
            key={i}
            bath={item.bath}
            bed={item.bed}
            name={item.name}
            price={item.price}
            city={item.city}
            thumbnail={item.thumbnail}
          />
        ))}
        <Grid
          justifyItems="center"
          alignItems="center"
          w="278px"
          h="497px"
          border={`2px solid ${theme.colors.blue[900]}`}
        >
          <IconButton
            variant="outline"
            fontSize="3em"
            aria-label="add new property"
            icon={<BiPlusCircle/>}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Properties