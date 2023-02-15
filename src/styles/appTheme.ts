

import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#777'
                }
            }
        }
    },
});
