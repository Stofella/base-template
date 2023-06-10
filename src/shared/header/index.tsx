import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { useNavigate } from 'react-router-dom'

import { PagesHeader } from './intefaces';

import { SmallScreen } from './SmallScreen';
import { LargeScreen } from './LargeScreen';

const pages: PagesHeader[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Page2',
    url: '/page2',
  },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <SmallScreen pages={pages} navigate={navigate} />

          <LargeScreen pages={pages} navigate={navigate} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
