import { AppShell } from '@mantine/core';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';

export const Home = () => (
  <AppShell padding='md' header={{ height: 60 }} footer={{ height: 40 }}>
    <AppShell.Header>
      <Header />
    </AppShell.Header>
    <AppShell.Main>
      <Content />
    </AppShell.Main>
    <AppShell.Footer>
      <Footer />
    </AppShell.Footer>
  </AppShell>
);
