

import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#777'
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                    {
                        display: 'none',
                    },
                    '& input[type=number]': {
                        MozAppearance: 'textfield',
                    },
                },
            },
        },

    },
});
