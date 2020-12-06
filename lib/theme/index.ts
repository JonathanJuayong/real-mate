import { extendTheme } from '@chakra-ui/react';

const fonts = {
  branding: {
    header: "'Roboto Slab', serif",
    body: "'Open Sans Condensed', sans-serif"
  }
}

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: fonts.branding.body,
        fontSize: "1.5rem"
      }
    }
  },
  fonts
})