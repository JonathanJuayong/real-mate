import { Grid, GridItem, Button, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '..';
import { theme } from '../../lib/theme';
import { FiHome, FiMonitor, FiCalendar } from 'react-icons/fi';

export const AppSidebar: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState("true");
  const hoverStyle = {
    color: theme.colors.blue[900],
    background: "white"
  }
  const navItems: Array<{ name: string, link: string, icon: JSX.Element }> = [
    { name: "dashboard", link: "dashboard", icon: <FiMonitor /> },
    { name: "properties", link: "properties", icon: <FiHome /> },
    // { name: "appointments", link: "", icon: <FiCalendar /> },
  ];

  useEffect(() => {
    setActive(pathname);
  }, []);
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
            <Link
              href={`/app/${item.link}`}
              key={i}
            >
              <Button
                h="5em"
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
            </Link>
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