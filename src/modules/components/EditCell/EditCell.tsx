import { Input, Box, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/redux-hooks";
import { changePrice } from "../../../shared/store/currency/currencySlice";
import { checkNewRate } from "../../../shared/helpers/checkNewRate";

const EditCell = ({ rate, numberCurrency, typeValue }: { rate: number, numberCurrency: number, typeValue: 'sell' | 'buy' }): JSX.Element => {
    const [value, setValue] = useState(rate);
    const [newValue, setNewValue] = useState(rate);
    const [isValid, setIsValid] = useState(true);
    const [isEditMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsValid(checkNewRate(value, newValue));
    }, [value, newValue])

    const changeEditModeOnDoubleClick = () => {
        setEditMode(!isEditMode);
    }

    const updateComponentValue = () => {

        setValue(newValue);
        dispatch(changePrice({ code: numberCurrency, newValue: newValue, rateType: typeValue }))
        setEditMode(false);
    }
    const cancelUpdateComponentValue = () => {
        setNewValue(value);
        setEditMode(false);
    }
    const renderEditView = () => {
        return (
            <Box sx={{
                display: 'inline-block',
                position: 'relative',
            }}>
                <Input type="number" value={newValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewValue(Number(e.target.value)) }} sx={{ width: '100px' }}></Input>
                <Box className='controlButtons' sx={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                }}>
                    <IconButton size="small" onClick={updateComponentValue} disabled={!isValid}>
                        <DoneIcon />
                    </IconButton>
                    <IconButton size="small" onClick={cancelUpdateComponentValue}>
                        <CloseIcon />
                    </IconButton>

                </Box>
            </Box >)
    }
    const renderDefaultView = () => {
        return (
            <Box onDoubleClick={changeEditModeOnDoubleClick} sx={{
                display: 'inline-block',
                position: 'relative',
                '&:hover': {
                    backgroundColor: '#bdbdbd',
                },
                '&:hover .editIcon': {
                    display: 'flex',
                }
            }}>
                <Typography sx={{ width: '100px' }} >{value}</Typography>
                <EditIcon className="editIcon" fontSize="small" sx={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    display: 'none',
                }} />
            </Box>
        )
    }
    return (
        <>
            {isEditMode ? renderEditView() : renderDefaultView()}
        </>
    )
}
export default EditCell;