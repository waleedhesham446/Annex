import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';

interface IForm2Props {
    smoke: boolean | undefined;
    setSmoke: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    medication: string;
    setMedication: React.Dispatch<React.SetStateAction<string>>;
}

export const Form2 = ({ smoke, setSmoke, medication, setMedication }: IForm2Props) => {

    const handleYes = () => {
        if (smoke !== true) {
            setSmoke(true);
        } else {
            setSmoke(undefined);
        }
    }

    const handleNo = () => {
        if (smoke !== false) {
            setSmoke(false);
        } else {
            setSmoke(undefined);
        }
    }
    
    return (
        <Stack
            sx={{
                width: '100%',
                height: '198px'
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
                        htmlFor="smoke"
                        sx={{
                            fontFamily: 'SF Pro Text',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '17.9px',
                            textAlign: 'left',
                            color: '#EDEDED !important',
                            mb: 0.5
                        }}
                    >
                        Do you smoke?
                    </FormLabel>

                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={3}
                    >
                        <FormControlLabel  
                            control={
                                <Checkbox
                                    checked={smoke === true}
                                    onChange={handleYes}
                                    checkedIcon={
                                        <CheckBoxRoundedIcon
                                            sx={{
                                                color: '#FFF',
                                            }}
                                        />
                                    }
                                    icon={
                                        <CheckBoxOutlineBlankRoundedIcon
                                            sx={{
                                                color: '#FFF',
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
                                        textAlign: 'left',
                                        color: '#FFF',
                                    }}
                                >
                                    Yes, I do.
                                </Typography>
                            }
                        />

                        <FormControlLabel  
                            control={
                                <Checkbox
                                    checked={smoke === false}
                                    onChange={handleNo}
                                    checkedIcon={
                                        <CheckBoxRoundedIcon
                                            sx={{
                                                color: '#FFF',
                                            }}
                                        />
                                    }
                                    icon={
                                        <CheckBoxOutlineBlankRoundedIcon
                                            sx={{
                                                color: '#FFF',
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
                                        textAlign: 'left',
                                        color: '#FFF',
                                    }}
                                >
                                    No, I don’t.
                                </Typography>
                            }
                        />
                    </Stack>
                </FormControl>
                
                {/* <FormControl>
                    <FormLabel
                        htmlFor="medication"
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
                        Are you currently on medication?
                    </FormLabel>
                    <TextField
                        id='medication'
                        type='text'
                        placeholder='If yes, what medication?'
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
                    />
                </FormControl> */}

                <FormControl fullWidth>
                    <InputLabel
                        id="medication-label"
                        sx={{
                            color: '#FFF'
                        }}
                    >
                        Medication
                    </InputLabel>
                    <Select
                        labelId="medication-label"
                        value={medication}
                        label="Medication"
                        onChange={(e) => setMedication(e.target.value)}
                        sx={{
                            color: '#FFF',
                            'fieldset': {
                                borderColor: '#FFF',
                            },
                            ':hover': {
                                'fieldset': {
                                    borderColor: '#DDD !important',
                                },
                            },
                        }}
                    >
                        <MenuItem value={'none'}>None</MenuItem>
                        <MenuItem value={'Blood Pressure'}>Blood Pressure</MenuItem>
                        <MenuItem value={'Diabetes'}>Diabetes</MenuItem>
                        <MenuItem value={'Cholesterol'}>Cholesterol</MenuItem>
                        <MenuItem value={'Asthma'}>Asthma</MenuItem>
                        <MenuItem value={'Heart Disease'}>Heart Disease</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Stack>
    );
}