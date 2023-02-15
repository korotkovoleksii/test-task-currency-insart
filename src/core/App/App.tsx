import { Box, Container, Divider } from '@mui/material';
import Footer from '../../modules/components/Footer/Footer';
import Header from '../../modules/components/Header/Header';
import './App.css';

function App() {
  return (
    <Box>
      <Container>
        <Header />
      </Container>
      <Divider />
      <Container>
        <Box sx={{ height: 'calc(100vh - 150px)' }}>
          Body
        </Box>
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
}

export default App;
