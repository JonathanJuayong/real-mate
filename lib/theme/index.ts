import { extendTheme } from '@chakra-ui/react';

const fonts = {
  branding: {
    header: "'Roboto Slab', serif",
    body: "'Roboto Condensed', sans-serif"
  }
}

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: fonts.branding.body,
        fontSize: "1.5rem",
        color: "#292B37"
      }
    }
  },
  fonts
})