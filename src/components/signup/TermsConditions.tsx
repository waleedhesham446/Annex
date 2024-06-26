import React from 'react';
import { Typography } from '@mui/material';

export const TermsConditions = () => {

    return (
        <Typography
            sx={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                textAlign: 'center',
                color: '#828282',
            }}
        >
            By clicking next, you agree to our <span style={{ color: '#000' }}>Terms of Service</span> and <span style={{ color: '#000' }}>Privacy Policy</span>
        </Typography>
    );

}