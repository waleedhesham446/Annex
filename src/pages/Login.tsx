import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

export const Login = () => {
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignin = () => {
        setShowError(false);
        setLoading(true);
        setTimeout(() => {
            setShowError(true);
            setLoading(false);
        }, 2000);
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
        }}>
            <Typography variant='h1' sx={{
                fontFamily: 'Avenir',
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: '58.82px',
                textAlign: 'left'
            }}>
                Welcome <br />
                back!
            </Typography>

            <Typography variant='h5' sx={{
                fontFamily: 'Avenir',
                fontSize: '32px',
                fontWeight: 300,
                lineHeight: '39.21px',
                textAlign: 'left'
            }}>
                Sign in
            </Typography>

            <form>
                <Stack
                    gap={2}
                    sx={{
                        mt: '4rem'
                    }}
                >
                    <FormControl>
                        <FormLabel
                            htmlFor="username"
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
                            Username
                        </FormLabel>
                        <TextField
                            id='username'
                            type='text'
                            placeholder='Enter your username'
                            variant='outlined'
                            sx={{
                                width: '100%',
                                backgroundColor: '#D9D9D9',
                                borderRadius: 5,
                                'fieldset': {
                                    borderRadius: 5
                                },
                                'input': {
                                    // py: '1.25rem'
                                }
                            }}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel
                            htmlFor="password"
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
                            Password
                        </FormLabel>
                        <TextField
                            id='password'
                            type='password'
                            placeholder='Enter your password'
                            variant='outlined'
                            sx={{
                                width: '100%',
                                backgroundColor: '#D9D9D9',
                                borderRadius: 5,
                                'fieldset': {
                                    borderRadius: 5
                                },
                                'input': {
                                    // py: '1.25rem'
                                }
                            }}
                        />
                    </FormControl>

                    <FormControlLabel  
                        sx={{
                            width: 'max-content',
                            mb: 2
                        }}
                        control={
                            <Checkbox
                                sx={{
                                    color: '#000',
                                }}
                                checkedIcon={
                                    <CheckBoxRounded
                                        sx={{
                                            color: '#000',
                                        }}
                                    />
                                }
                            />
                        }
                        label={
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'SF Pro Text',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '16.71px',
                                    textAlign: 'left'
                                }}
                            >
                                Remember me
                            </Typography>
                        }
                    />

                </Stack>
                
                <Stack alignItems="center" gap={2}>
                    <Button
                        variant='contained'
                        disableElevation
                        sx={{
                            width: '100%',
                            maxWidth: '280px',
                            height: '65px',
                            gap: 1,
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
                        disabled={loading}
                        onClick={handleSignin}
                    >
                        Sign in
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
                            No user found with matching username
                        </FormHelperText>
                    }
                    
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'SF Pro Text',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '16.71px',
                            textAlign: 'center',
                            color: '#000'
                        }}
                    >
                        I don’t have an account yet. <Link
                            to="/signup"
                            style={{
                                color: '#000'
                            }}
                        >
                            Click here
                        </Link>
                    </Typography>
                </Stack>
            </form>

        </Stack>
    );
}