import React from 'react';
import { FormControl, FormLabel, Stack, TextField } from '@mui/material';

interface IForm1Props {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    birthday: string;
    setBirthday: React.Dispatch<React.SetStateAction<string>>;
}

export const Form1 = ({ name, setName, birthday, setBirthday }: IForm1Props) => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '220px'
            }}
        >
            <Stack
                gap={2}
                sx={{
                    mt: '1rem'
                }}
            >
                <FormControl>
                    <FormLabel
                        htmlFor="name"
                        sx={{
                            fontFamily: 'SF Pro Text',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '17.9px',
                            textAlign: 'left',
                            color: '#EDEDED',
                            mb: 0.5
                        }}
                    >
                        What’s your name?
                    </FormLabel>
                    <TextField
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        variant='outlined'
                        sx={{
                            width: '100%',
                            backgroundColor: '#D9D9D9',
                            borderRadius: 5,
                            'fieldset': {
                                borderRadius: 5
                            },
                            'input': {
                                py: '1.25rem',
                                '::placeholder': {
                                    color: '#858585',
                                    opacity: 1,
                                }
                            }
                        }}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel
                        htmlFor="birthday"
                        sx={{
                            fontFamily: 'SF Pro Text',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '17.9px',
                            textAlign: 'left',
                            color: '#EDEDED',
                            mb: 0.5
                        }}
                    >
                        When is your birthday?
                    </FormLabel>
                    <TextField
                        id='birthday'
                        type='date'
                        placeholder='dd/mm/yyyy'
                        variant='outlined'
                        sx={{
                            width: '100%',
                            backgroundColor: '#D9D9D9',
                            borderRadius: 5,
                            'fieldset': {
                                borderRadius: 5
                            },
                            'input': {
                                py: '1.25rem',
                                '::placeholder': {
                                    color: '#858585',
                                    opacity: 1,
                                }
                            }
                        }}
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />
                </FormControl>
            </Stack>
        </Stack>
    );
}