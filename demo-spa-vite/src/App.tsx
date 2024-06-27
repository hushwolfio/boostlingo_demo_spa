import AppRouter from './router';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider defaultColorScheme='dark' forceColorScheme='dark'>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
