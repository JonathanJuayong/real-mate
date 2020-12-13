import { useRouter } from 'next/router';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { ImageGallery, PropertyPageForm, PropertyDataType } from '../../../components';

const PropertyPage = () => {
  const router = useRouter();
  const dummyData: PropertyDataType = {
    name: "laureano di trevi",
    price: 4200000,
    currency: "php",
    address: {
      line: "laureano di trevi",
      city: "makati",
      provinceStateRegion: "metro manila",
      country: "philippines",
      zipCode: "1230"
    },
    details: {
      size: {
        area: 201,
        unit: "square meter",
        floors: 2
      },
      amenities: [
        { type: "bedroom", qty: 2},
        { type: "bathroom", qty: 2},
      ]
    },
    images: [
      { type: "bedroom1", url: "/test/house1.png" },
      { type: "bedroom2", url: "/test/house2.png" },
      { type: "bathroom1", url: "/test/house3.png" },
      { type: "bathroom2", url: "/test/house4.png" },
      { type: "garage1", url: "/test/house1.png" },
      { type: "pool1", url: "/test/house2.png" },
    ],
  }
  const { pid } = router.query
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
    >
      <ImageGallery imagesArray={dummyData.images} />
      <PropertyPageForm />
    </Grid>
  )
}

export default PropertyPage;