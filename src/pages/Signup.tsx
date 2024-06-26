import React, { useState } from 'react';
import { Button, FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useNavigate } from 'react-router-dom';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { SignupType } from '../components/signup/SignupType';
import { ClinicSignup } from '../components/signup/ClinicSignup';
import { IndividualSignup } from '../components/signup/IndividualSignup';
import { CredentialResponse } from '@react-oauth/google';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Signup = () => {
    const navigate = useNavigate();

    const [status, setStatus] = useState(-1);
    const [type, setType] = useState(-1);
    const [accessCode, setAccessCode] = useState('');
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);

    const disableNext = 
        (type === -1 && status === -1) ||
        (type === 0 && accessCode === '') ||
        (type === 1 && !emailRegex.test(email));

    const handleNext = () => {
        if (type === -1) {
            if (status === -1) {
                console.log('Please select a type');
            } else {
                setType(status);
            }
        } else if (type === 0) {
            console.log('Access Code:', accessCode);
            setShowError(false);
            setLoading(true);
            setTimeout(() => {
                setShowError(true);
                setLoading(false);
            }, 2000);
        } else if (type === 1) {
            console.log('Email:', email);
            navigate('/survey');
        }
    }

    const onGoogleSignup = (response: CredentialResponse) => {
        console.log('Email:', email);
        navigate('/survey');
    }
    
    return (
        <Stack sx={{
            height: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#F8F8F8',
            px: {
                xs: '2rem',
                sm: '3rem',
                md: '4rem',
            },
            py: {
                xs: '3rem',
                sm: '4rem',
                md: '5rem',
            },
            position: 'relative',
        }}>
            <IconButton
                onClick={() => navigate('/')}
                sx={{
                    color: '#000',
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                }}
            >
                <HighlightOffRoundedIcon />
            </IconButton>
            
            <Typography variant='h1' sx={{
                fontFamily: 'Avenir',
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: '58.82px',
                textAlign: 'left'
            }}>
                A new <br />
                start
            </Typography>

            <Typography variant='h5' sx={{
                fontFamily: 'Avenir',
                fontSize: '32px',
                fontWeight: 300,
                lineHeight: '39.21px',
                textAlign: 'left'
            }}>
                Sign up
            </Typography>

            <Stack
                alignItems="center"
                gap={2}
                sx={{
                    mt: '4rem'
                }}
            >   
                {
                    type === -1 ?
                        <SignupType status={status} setStatus={setStatus} /> :
                    type === 0 ?
                        <ClinicSignup accessCode={accessCode} setAccessCode={setAccessCode} /> :
                    type === 1 ?
                        <IndividualSignup email={email} setEmail={setEmail} onGoogleSignup={onGoogleSignup} /> :
                        <></>
                }

                <Button
                    variant='contained'
                    disableElevation
                    sx={{
                        width: '100%',
                        maxWidth: '280px',
                        height: '65px',
                        gap: 1,
                        mt: '2rem',
                        borderRadius: '35px',
                        backgroundColor: '#000',
                        color: '#fff',
                        fontFamily: 'SF Pro Text',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '23.87px',
                        textAlign: 'center',
                        textTransform: 'none',
                        transition: 'all 0.1s',
                        '&:hover': {
                            backgroundColor: '#000',
                            opacity: 0.85
                        }
                    }}
                    onClick={handleNext}
                    disabled={
                        loading ||
                        disableNext
                    }
                >
                    Next
                    <ExpandCircleDownOutlinedIcon
                        sx={{
                            transform: 'rotate(-90deg)',
                        }}
                    />
                </Button>
                { showError &&
                    <FormHelperText
                        error={true}
                        sx={{
                            mt: -1
                        }}
                    >
                        No user found with matching access code
                    </FormHelperText>
                }
            </Stack>

        </Stack>
    );
}