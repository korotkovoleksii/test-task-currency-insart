import { Box, Container, Divider } from '@mui/material';
import { useEffect } from 'react';
import Footer from '../../modules/components/Footer/Footer';
import Header from '../../modules/components/Header/Header';
import { useAppDispatch } from '../../shared/hooks/redux-hooks';
import { retrieveCurrency } from '../../shared/store/currency/currencySlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  // const data = useAppSelector(store => store.currency);

  useEffect(() => {
    dispatch(retrieveCurrency());
  }, [dispatch])
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
