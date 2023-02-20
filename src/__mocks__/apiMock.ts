import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { currencyDataMock } from "./currencyDataMocks";

const axiosInstance = axios.create();
const axiosMockAdapterInstance = new MockAdapter(axiosInstance);

axiosMockAdapterInstance.onGet('http://localhost:3000/api/currency-data-mock').reply(200, JSON.stringify(currencyDataMock),
);

export default axiosInstance;