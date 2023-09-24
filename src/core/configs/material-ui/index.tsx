import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useColorMode } from '@/core/context';

export function MaterialUiConfigProvider(props: PropsWithChildren) {
  const [colorMode] = useColorMode();

  const theme = createTheme({
    palette: {
      mode: colorMode,
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
