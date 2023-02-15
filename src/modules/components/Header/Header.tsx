import { Box, Typography } from "@mui/material"

const Header = (): JSX.Element => {
    return (
        <Box sx={{
            height: '75px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box>
                <Typography>Text</Typography>
                <Box>Logo</Box>
            </Box>
        </Box >
    )
}

export default Header;