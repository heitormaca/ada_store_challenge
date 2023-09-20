import { QueryClientProvider } from '@tanstack/react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { queryClient } from '@/core/configs/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/core/routes';
import { MaterialUiConfigProvider } from './core/configs/material-ui';
import { ColorModeProvider } from './core/context';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <MaterialUiConfigProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </MaterialUiConfigProvider>
      </ColorModeProvider>
    </QueryClientProvider>
  );
}
