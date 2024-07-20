import React from 'react';
import { FormControl, FormLabel, Stack, TextField, Typography } from '@mui/material';
import { TermsConditions } from './TermsConditions';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

interface IIndividualSignupProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    onGoogleSignup: (response: CredentialResponse) => void;
}

export const IndividualSignup = ({ email, setEmail, onGoogleSignup }: IIndividualSignupProps) => {

    const responseMessage = (response: CredentialResponse) => {
        console.log(response);
        onGoogleSignup(response);
    }

    const errorMessage = () => {
        console.log('error');
    }

    return (
        <Stack
            gap={4}
            sx={{
                'div:nth-child(3) div': {
                    display: 'flex',
                    justifyContent: 'center',
                }
            }}
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
                    Email
                </FormLabel>
                <TextField
                    id='access-code'
                    type='email'
                    placeholder='name@domain.com'
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>

            <Stack
                sx={{
                    position: 'relative',
                    borderTop: '1px solid #E6E6E6',
                }}
            >
                <Typography
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#828282',
                        backgroundColor: '#F8F8F8',
                        px: '1rem',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '19.6px',
                        textAlign: 'center',
                    }}
                >
                    or continue with
                </Typography>
            </Stack>

            <GoogleLogin
                onSuccess={responseMessage}
                onError={errorMessage}
                locale='en'
                logo_alignment='center'
            />

            <TermsConditions />
        </Stack>
    );
}