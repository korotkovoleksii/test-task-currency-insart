import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useState } from "react";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import {
  arrCodeISO,
  codeUAH,
  currencies,
} from "../../../shared/constants/codeSelectedCurrencies";

const CurrencyConverter = (): JSX.Element => {
  const [currencyChange, setCurrencyChange] = useState(arrCodeISO[0]);
  const [currencyGet, setCurrencyGet] = useState(arrCodeISO[1]);
  const [valueChange, setValueChange] = useState(0);
  const [valueGet, setValueGet] = useState(0);
  const currency = useAppSelector((state) => state.currency);

  const handlerOnChangeGet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setValueGet(value);

    if (currencyGet !== currencyChange) {
      const rate = currency.data.find((item) => {
        return currencyGet === codeUAH
          ? item.currencyCodeB === currencyGet &&
              item.currencyCodeA === currencyChange
          : item.currencyCodeA === currencyGet &&
              item.currencyCodeB === currencyChange;
      });
      if (rate) {
        const rez =
          currencyGet === codeUAH
            ? value / rate.rateSell
            : value * rate.rateSell;
        setValueChange(Number(rez.toFixed(2)));
      }
    } else {
      setValueChange(value);
    }
  };
  const handlerOnChangeCurrencyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setValueChange(value);

    if (currencyGet !== currencyChange) {
      const rate = currency.data.find((item) => {
        return currencyGet === codeUAH
          ? item.currencyCodeB === currencyGet &&
              item.currencyCodeA === currencyChange
          : item.currencyCodeA === currencyGet &&
              item.currencyCodeB === currencyChange;
      });
      if (rate) {
        const rez =
          currencyGet === codeUAH
            ? value / rate.rateSell
            : value * rate.rateSell;
        setValueGet(Number(rez.toFixed(2)));
      }
    } else {
      setValueGet(value);
    }
  };
  const swapDataClick = () => {
    const c = currencyChange;
    setCurrencyChange(currencyGet);
    setCurrencyGet(c);
    const value = valueChange;
    setValueChange(valueGet);
    setValueGet(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="inputChangeCurrencyChange">Change</InputLabel>
        <Input
          type="number"
          id="inputChangeCurrencyChange"
          value={valueChange}
          onChange={handlerOnChangeCurrencyChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Currency</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={currencyChange}
          label="currencyChange"
          onChange={(e) => setCurrencyChange(Number(e.target.value))}
        >
          {arrCodeISO.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {currencies[item.toString()]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <IconButton onClick={swapDataClick}>
        <CompareArrowsIcon fontSize="small" />
      </IconButton>

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="inputChangeGet">Get</InputLabel>
        <Input
          type="number"
          id="inputChangeGet"
          value={valueGet}
          onChange={handlerOnChangeGet}
        />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Currency</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={currencyGet}
          label="currencyGet"
          onChange={(e) => setCurrencyGet(Number(e.target.value))}
        >
          {arrCodeISO.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {currencies[item.toString()]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CurrencyConverter;
