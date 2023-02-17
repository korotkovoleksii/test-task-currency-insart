import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { currencies } from "../../../shared/constants/codeSelectedCurrencies";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import EditCell from "../EditCell/EditCell";


function createData(
    title: string,
    buy: number,
    sell: number,
    numberCurrency: number,
) {
    return { title, buy, sell, numberCurrency };
}
const TableCurrency = (): JSX.Element => {
    const data = useAppSelector(state => state.currency);
    const rows = data.data.map(item => {
        return createData(`${currencies[item.currencyCodeA.toString()]}/${currencies[item.currencyCodeB.toString()]}`, item.rateBuy, item.rateSell, item.currencyCodeA)
    })
    return (
        <TableContainer>
            <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Currency/Current Date</TableCell>
                        <TableCell >Buy</TableCell>
                        <TableCell >Sell</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '45px' }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell><EditCell rate={row.buy} numberCurrency={row.numberCurrency} typeValue={'buy'} /></TableCell>
                            <TableCell><EditCell rate={row.sell} numberCurrency={row.numberCurrency} typeValue={'sell'} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TableCurrency;