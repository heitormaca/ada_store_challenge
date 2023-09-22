import { useColorMode } from '@/core/context';
import { PropsWithChildren, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export function MaterialUiConfigProvider(props: PropsWithChildren) {
  const [colorMode] = useColorMode();

  const theme = useMemo(
    () => createTheme(colorMode === 'light' ? lightTheme
     : darkTheme),
    [colorMode]
  )

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
