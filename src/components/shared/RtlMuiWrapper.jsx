// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    allVariants: {
      fontFamily: 'iransansx-num-regular',
      textTransform: 'none',
      fontSize: 14,
    },
  },
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#f7941d",
  //     secondary: "#333",
  //     text: "#333",
  //     contrastText: "#fff",
  //     border: "#f0f0f0",
  //     sectionTitle: "#2c2d3f",
  //     productText: "#424646",
  //     pageBack: "#f6f7fb",
  //   },
  // },
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RtlMuiWrapper({ children }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default RtlMuiWrapper;
