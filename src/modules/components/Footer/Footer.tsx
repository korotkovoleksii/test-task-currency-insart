import { Box, Typography } from "@mui/material"

const Footer = (): JSX.Element => {
    return (
        <Box sx={{
            height: '75px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="body1" component='div'>2020 all right reserved</Typography>
        </Box>
    )
}

export default Footer;