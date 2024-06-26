import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useNavigate } from 'react-router-dom';
import { Form1 } from '../components/survet/Form1';
import { Form2 } from '../components/survet/Form2';

const titles = [
    {
        title: ['Welcome!'],
        subtitle: ['We’re gonna ask', 'you a few questions']
    },
    {
        title: ['Start with', 'the basics'],
        subtitle: ['Starting by...']
    },
    {
        title: ['Going for', 'the details'],
        subtitle: ['Let’s check your ', 'health!']
    }
]

export const Survey = () => {
    const navigate = useNavigate();

    const [stage, setStage] = useState(0);
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [smoke, setSmoke] = useState<boolean | undefined>(undefined);
    const [medication, setMedication] = useState('');

    
    const handleNext = () => {
        if (stage === 2) {
            const age = new Date().getFullYear() - new Date(birthday).getFullYear();
            navigate(`/result?name=${name}&age=${age}&smoke=${Number(smoke)}&medication=${medication}`);
        } else {
            setStage(prev => prev + 1);
        }
    }

    const disableNext = 
        (stage === 1 && (!name || !birthday)) ||
        (stage === 2 && (smoke === undefined || !medication));

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
            <Typography variant='h1' sx={{
                fontFamily: 'Avenir',
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: '58.82px',
                textAlign: 'left',
                color: '#FFF',
            }}>
                { titles[stage].title.map((text, index) => (
                    <span key={index}>
                        {text}
                        <br />
                    </span>
                )) }
            </Typography>

            <Typography variant='h5' sx={{
                fontFamily: 'Avenir',
                fontSize: '32px',
                fontWeight: 300,
                lineHeight: '39.21px',
                textAlign: 'left',
                color: '#FFF',
            }}>
                { titles[stage].subtitle.map((text, index) => (
                    <span key={index}>
                        {text}
                        <br />
                    </span>
                )) }
            </Typography>

            <Stack
                alignItems="center"
                gap={2}
                sx={{
                    mt: '4rem'
                }}
            >
                { stage === 0 ?
                    <Stack
                        sx={{
                            height: '240px'
                        }}
                    >

                    </Stack> :
                    stage === 1 ?
                    <Form1 name={name} setName={setName} birthday={birthday} setBirthday={setBirthday} /> :
                    stage === 2 ?
                    <Form2 smoke={smoke} setSmoke={setSmoke} medication={medication} setMedication={setMedication} /> :
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
                    onClick={handleNext}
                    disabled={disableNext}
                >
                    Next
                    <ExpandCircleDownOutlinedIcon
                        sx={{
                            transform: 'rotate(-90deg)',
                        }}
                    />
                </Button>
            </Stack>

        </Stack>
    );
}