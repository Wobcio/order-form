import { Slider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NumericInput from 'material-ui-numeric-input';


const Opt = ({pickedDish, register}) =>{
    

    if (pickedDish === 'pizza') {
        return(
            <div>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    label="Number of slices"
                    name="no_of_slices"
                    type="number"
                    inputProps= {{ min: 1 }}
                    autoFocus
                    {...register("no_of_slices", {
                        required: true,
                      })}
                />
                
                <NumericInput
                    margin="normal"
                    name='diameter'
                    fullWidth
                    precision={1}
                    decimalChar='.'
                    thousandChar='.'
                    label='Diameter'
                    variant='outlined'
                    inputProps= {{...register("diameter", {
                        required: true,
                      })}}
                />
            </div>
        )
    }else if (pickedDish === 'soup') {
        return(
            <Box sx={{ mt: 2, mb: 1}}>
                <Typography id="spiciness-slider">
                    Spiciness
                </Typography>
                <Slider 
                    label="Spiciness"
                    name="spiciness_scale"
                    defaultValue={5} 
                    valueLabelDisplay="auto"
                    min={1}
                    max={10}
                    marks
                    aria-labelledby="spiciness-slider"
                    {...register("spiciness_scale", {
                        required: true,
                      })}
                />
            </Box>
        )

        
    }else if (pickedDish === 'sandwich') {
        return(
            <TextField 
                margin="normal"
                required
                fullWidth
                label="Slices of bread"
                name="slices_of_bread"
                type="number"
                InputProps={{ inputProps: { min: 1 } }}
                autoFocus
                {...register("slices_of_bread", {
                    required: true,
                  })}
            />    
        )
    }
};

export default Opt;