import { Grid, GridItem, Button, Text, background } from '@chakra-ui/react';
import { useState } from 'react';
import { Logo } from '../components';
import { theme } from '../lib/theme';
import { FiHome, FiMonitor, FiCalendar } from 'react-icons/fi';

export const AppSidebar: React.FC<{}> = ({ children }) => {
  const [active, setActive] = useState("dashboard");
  const hoverStyle = {
    color: theme.colors.blue[900],
    background: "white"
  }
  const navItems: Array<{ name: string, link: string, icon: JSX.Element }> = [
    { name: "dashboard", link: "", icon: <FiMonitor /> },
    { name: "properties", link: "", icon: <FiHome /> },
    { name: "appointments", link: "", icon: <FiCalendar /> },
  ];
  return (
    <Grid
      gridAutoFlow="column"
      gridTemplateColumns="2fr 10fr"
      gap="1em"
    >
      <Grid
        className="app sidebar"
        bg={theme.colors.blue[900]}
        minH="100vh"
        justifyItems="center"
        alignItems="center"
      >
        <GridItem>
          <Logo
            height={40}
            white
          />
        </GridItem>
        <Grid
          alignSelf="flex-start"
          w="100%"
        >
          {navItems.map((item, i) => (
            <Button
              h="5em"
              key={i}
              borderRadius="0px"
              variant="ghost"
              color="white"
              fontWeight="400"
              leftIcon={item.icon}
              _hover={hoverStyle}
              style={active === item.name ? hoverStyle : {}}
              onClick={() => setActive(item.name)}
            >
              <Text>{item.name}</Text>
            </Button>
          ))}
        </Grid>
      </Grid>
      <GridItem
        className="app content"
        py="1em"
      >
        {children}
      </GridItem>
    </Grid>
  )
}