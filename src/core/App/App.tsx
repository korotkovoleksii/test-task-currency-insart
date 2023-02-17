import { Alert, Box, Container, Divider } from "@mui/material";
import { useEffect } from "react";
import CurrencyConverter from "../../modules/components/CurrencyConverter/CurrencyConverter";
import Footer from "../../modules/components/Footer/Footer";
import Header from "../../modules/components/Header/Header";
import TableCurrency from "../../modules/components/Table/Table";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux-hooks";
import { retrieveCurrency } from "../../shared/store/currency/currencySlice";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.currency);

  useEffect(() => {
    dispatch(retrieveCurrency());
  }, [dispatch]);
  return (
    <Box>
      <Container disableGutters>
        <Header />
      </Container>
      <Divider />
      <Container disableGutters>
        <Box sx={{ height: "calc(100vh - 202px)", minHeight: "450px" }}>
          {!data.error ? (
            <>
              <TableCurrency /> <CurrencyConverter />
            </>
          ) : (
            <Alert severity="error">{data.error}</Alert>
          )}
        </Box>
      </Container>
      <Divider />

      <Footer />
    </Box>
  );
}

export default App;
