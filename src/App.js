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
import { useForm } from 'react-hook-form';

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

  const { register, unregister, handleSubmit } = useForm();


  const prepareSubmit = (data) => {

    if (data.spiciness_scale !== undefined) data.spiciness_scale = parseInt(data.spiciness_scale);
    if (data.no_of_slices !== undefined) data.no_of_slices = parseInt(data.no_of_slices);
    if (data.diameter !== undefined) data.diameter = parseFloat(data.diameter);
    if (data.slices_of_bread !== undefined) data.slices_of_bread = parseInt(data.slices_of_bread);

  }

  const onSubmit = async data => {

    prepareSubmit(data);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };

  const response = await fetch(['https://frosty-wood-6558.getsandbox.com/dishes'], requestOptions);
  const jsonData = await response.json();

  console.log(jsonData);
  }

  const [dish, setDish] = React.useState('');

  const handleChangeDish = (event) => {
    setDish(event.target.value);
    unregister("no_of_slices");
    unregister("diameter");
    unregister("spiciness_scale");
    unregister("slices_of_bread");
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
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="dishName"
              label="Dish name"
              name="name"
              autoFocus
              {...register("name", {
                required: true,
              })}
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
              {...register("preparation_time", {
                required: true,
              })}
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
                inputProps= {{...register("type", {
                  required: true,
                })}}
              >
                <MenuItem value={'soup'}>Soup</MenuItem>
                <MenuItem value={'pizza'}>Pizza</MenuItem>
                <MenuItem value={'sandwich'}>Sandwich</MenuItem>
              </Select>
            </FormControl>
            <Opt pickedDish={dish} register={register} />
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
