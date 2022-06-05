import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import Opt from './Opt';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f19409',
      darker: '#ba6d02',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      preparation_time: data.get('preparation_time'),
      type: data.get('type')
    });
  };

  const [dish, setDish] = React.useState('');

  const handleChangeDish = (event) => {
    setDish(event.target.value);
  };


  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <RestaurantIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Set the order
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="dishName"
              label="Dish name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="Duration"
              name="preparation_time"
              label="Duration"
              type="time"
              id="duration"
              inputProps={{ step: "1", min: "0", max: "10" }}
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Dish</InputLabel>
              <Select
                labelId="dish-select-label"
                id="dish-select"
                value={dish}
                label="Dish Type"
                name="type"
                onChange={handleChangeDish}
              >
                <MenuItem value={'soup'}>Soup</MenuItem>
                <MenuItem value={'pizza'}>Pizza</MenuItem>
                <MenuItem value={'sandwich'}>Sandwich</MenuItem>
              </Select>
            </FormControl>
            <Opt pickedDish={dish} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send an order
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
