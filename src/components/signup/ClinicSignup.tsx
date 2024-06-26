import React from 'react';
import { FormControl, FormLabel, Stack, TextField } from '@mui/material';
import { TermsConditions } from './TermsConditions';

interface IClinicSignupProps {
    accessCode: string;
    setAccessCode: React.Dispatch<React.SetStateAction<string>>;
}

export const ClinicSignup = ({ accessCode, setAccessCode }: IClinicSignupProps) => {

    return (
        <Stack
            gap={2}
        >
            <FormControl>
                <FormLabel
                    htmlFor="access-code"
                    sx={{
                        fontFamily: 'SF Pro Text',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '17.9px',
                        textAlign: 'left',
                        color: '#000',
                        mb: 0.5
                    }}
                >
                    Access Code
                </FormLabel>
                <TextField
                    id='access-code'
                    type='text'
                    placeholder='Type your Access Code'
                    variant='outlined'
                    sx={{
                        width: '100%',
                        backgroundColor: '#D9D9D9',
                        borderRadius: 5,
                        'fieldset': {
                            borderRadius: 5
                        },
                        'input': {
                            py: '1.25rem'
                        }
                    }}
                    value={accessCode}
                    onChange={e => setAccessCode(e.target.value)}
                />
            </FormControl>

            <TermsConditions />
        </Stack>
    );
}