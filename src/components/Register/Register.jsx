import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register= () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const { register, handleSubmit, control, formState:{errors} } = useForm();
   
    const onSubmit = async(data)=>{
        await axios.post('http://localhost:3001/user/signup', data)
        console.log(data);}

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TextField 
                    fullWidth
                    // required
                    name='name' 
                    label='Name' 
                    placeholder="Enter your name"
                    {...register("name", {
                        required: "Required name",
                        pattern:{
                            value: new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g),
                            message: "Name Invalid"} 
                      })} 
                   error={Boolean(errors.name)}
                   helperText={errors.name?.message}/>
                     
                    <TextField 
                    fullWidth
                    // required 
                    name='email'
                    label='Email'
                     placeholder="Enter your email" 
                     {...register("email", {
                        required: "Required email",
                        pattern:{
                            value: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                            message: "Email Invalid"} 
                      })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}/>
                    <TextField 
                    fullWidth
                    // required
                    name='password' 
                    label='Password' 
                    type='password'
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Required password",
                        
                      })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}/>
                    {/* <TextField 
                    fullWidth 
                    label='Confirm Password' 
                    placeholder="Confirm your password"/> */}
                    {/* <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    <TextField 
                    fullWidth
                    // required
                    name='country'
                    label='Country' 
                    placeholder="Enter your Country" 
                    {...register("country", {
                        required: "Required country",
                        pattern:{
                            value: new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g),
                            message: "country es campo alfanumerico"} 
                      })}
                      error={Boolean(errors.country)}
                      helperText={errors.country?.message}/>
                    <TextField 
                    // required
                    fullWidth
                    name='phone' 
                    label='Phone Number' 
                    placeholder="Enter your phone number" 
                    {...register("phone", {
                        required: "Required phone",
                        pattern:{
                            value: new RegExp(/^[0-9]+$/g),
                            message: "Invalid phone"} 
                      })}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone?.message}/>
                    <TextField 
                    // required
                    fullWidth
                    name='address'
                     label='Adress' 
                     placeholder="Enter your address"
                     {...register("address", {
                        required: "Required address",
                        pattern:{
                            value: new RegExp(/^[A-Za-z0-9ñÑ]+$/g),
                            message: "Invalid address"} 
                      })}
                      error={Boolean(errors.address)}
                      helperText={errors.address?.message} />
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;
