import React, { useEffect, useState } from 'react';
import { Button, Stack, Typography, CircularProgress } from '@mui/material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import axios from 'axios';

export const Result = () => {
    // get query params
    const params = new URLSearchParams(window.location.search);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [healthStatus, setHealthStatus] = useState('');

    useEffect(() => {
        const age = params.get('age');
        const smoke = params.get('smoke');
        const medication = params.get('medication');

        axios.post('http://localhost:4000/predict', {
            age: Number(age),
            smoke: Boolean(Number(smoke)),
            medication
        }).then(res => {
            console.log(res.data);
            const status = res.data.split('\n')[1];
            if (!status) {
                setError('Something went wrong, please try again');
            }
            setHealthStatus(status);
        }).catch(err => {
            console.error(err);
            setError('Something went wrong, please try again');
        }).finally(() => {
            setLoading(false);
        });
    }, []);
    
    return (
        <Stack sx={{
            height: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#151515',
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
            {
                loading ?
                <CircularProgress
                    sx={{
                        color: '#FFF',
                        alignSelf: 'center',
                    }}
                /> :
                <Stack
                    alignItems="center"
                    gap={2}
                    sx={{
                        mt: '4rem'
                    }}
                >
                    <Stack
                        sx={{
                            height: '240px'
                        }}
                    >
                        { error ?
                            <Typography variant='h5' sx={{
                                fontFamily: 'Avenir',
                                fontSize: '25px',
                                fontWeight: 400,
                                lineHeight: '35px',
                                textAlign: 'left',
                                color: '#F00',
                            }}>
                                {error}
                            </Typography> :
                            <Typography variant='h5' sx={{
                                fontFamily: 'Avenir',
                                fontSize: '32px',
                                fontWeight: 500,
                                lineHeight: '45px',
                                textAlign: 'left',
                                color: '#FFF',
                            }}>
                                Your health status is <br />
                                <span style={{ color: '#29B0A3', fontWeight: 900, fontSize: '40px' }}>{healthStatus}</span>
                            </Typography>
                        }
                    </Stack>

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
                            backgroundColor: '#FFF',
                            color: '#000',
                            fontFamily: 'SF Pro Text',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '23.87px',
                            textAlign: 'center',
                            textTransform: 'none',
                            transition: 'all 0.1s',
                            '&:hover': {
                                backgroundColor: '#FFF',
                                opacity: 0.85
                            },
                            '&:disabled': {
                                backgroundColor: '#CCC',
                                color: '#999',
                            }
                        }}
                        disabled
                    >
                        Let's start
                        <ExpandCircleDownOutlinedIcon
                            sx={{
                                transform: 'rotate(-90deg)',
                            }}
                        />
                    </Button>
                </Stack>
            }
        </Stack>
    );
}