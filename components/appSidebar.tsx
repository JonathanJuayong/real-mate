import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

export const AppSidebar: React.FC<{}> = ({ children }) => {
  const [active, setActive] = useState("home");
  const navItems: Array<{ name: string, link: string }> = [
    { name: "home", link: "" },
    { name: "properties", link: "" },
    { name: "appointments", link: "" },
  ];
  return (
    <Grid
      gridAutoFlow="column"
      gridTemplateColumns="2fr 10fr"
    >
      <Grid
        minH="100vh"
      >
        test
      </Grid>
      <GridItem>
        {children}
      </GridItem>
    </Grid>
  )
}