import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const requests = [
  {
    value: 'Underling',
    label: 'Underling',
  },
  {
    value: 'Missive',
    label: 'Missive',
  },
  {
    value: 'Destination',
    label: 'Request Adding Destination to Board',
  },
  {
    value: 'Excursion',
    label: 'Start Excursion',
  },
  {
    value: 'Audience',
    label: 'Start Audience',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>//.Symposium_Host_Access</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80ch' },
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
      <TextField id="character-name" label="Name" variant="outlined" />
      <TextField id="request-type" select label="Request Type" defaultValue="Underling" helperText="Please select your request type">
        {requests.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
        ))}
      </TextField>
      <TextField
          id="outlined-multiline-flexible"
          label="Request Information"
          multiline
          minRows={4}
          maxRows={40}
        />
      <Button variant="contained">Submit Request</Button>
      </Stack>
      </Box>
      </header>
    </div>
    
  );
}

export default App;
