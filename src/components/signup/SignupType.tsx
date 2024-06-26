import React from 'react';
import { ButtonBase, Stack, Typography } from '@mui/material';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

interface ISignupTypeProps {
    status: number;
    setStatus: React.Dispatch<React.SetStateAction<number>>;
}

export const SignupType = ({ status, setStatus }: ISignupTypeProps) => {

    return (
        <>
            <Typography variant='h6' sx={{
                fontFamily: 'SF Compact Rounded',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '21.48px',
                textAlign: 'center'
            }}>
                I am registring
            </Typography>

            <Stack
                flexDirection="row"
                gap={4}
            >
                <ButtonBase
                    sx={{
                        flexDirection: 'column',
                        gap: 3,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        py: '3rem',
                        px: '1.5rem',
                        border: '2px solid',
                        borderColor: status === 0 ? '#29B0A3' : '#FFF',
                    }}
                    onClick={() => setStatus(0)}
                >
                    <MedicalServicesRoundedIcon
                        fontSize='large'
                        sx={{
                            borderRadius: '50%',
                            // border: '2px solid #000'
                        }}
                    />
                    <Typography
                        sx={{
                            
                        }}
                    >
                        <span
                            style={{
                                color: '#AAA'
                            }}
                        >
                            through a
                        </span>
                        <br />
                        Clinic or Hospital
                    </Typography>
                </ButtonBase>

                <ButtonBase
                    sx={{
                        flexDirection: 'column',
                        gap: 3,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        py: '3rem',
                        px: '1.5rem',
                        border: '2px solid',
                        borderColor: status === 1 ? '#29B0A3' : '#FFF',
                    }}
                    onClick={() => setStatus(1)}
                >
                    <AccountCircleRoundedIcon
                        fontSize='large'
                    />
                    <Typography
                        sx={{
                            // fontFamily: 'SF Pro Text',
                            // fontSize: '10px',
                            // fontWeight: 300,
                            // lineHeight: '19px',
                            // textAlign: 'center'
                        }}
                    >
                        <span
                            style={{
                                color: '#AAA'
                            }}
                        >
                            as an
                        </span>
                        <br />
                        Individual / Patient
                    </Typography>
                </ButtonBase>
            </Stack>
        </>
    );
}