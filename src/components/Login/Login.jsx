import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login=({handleChange})=>{
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    // const [body,setBody] = useState({username:'',password:''})
    const { register, handleSubmit, control, formState:{errors} } = useForm();

    // const handleChange2 = e=>{
    //     console.log(e.target.value)
    //     setBody({
    //         ...body,
    //         [e.target.name]:e.target.value
    //     })
        
    // }

    const onSubmit = async (data)=>{
        console.log(data);
        await axios.post('http://localhost:3001/user/signin', data)
    } 

    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>    
                <TextField 
                label='Username' 
                name='username' 
                placeholder='Enter username' 
                fullWidth 
                // required
                // onChange={handleChange2}
                // input Ref={register({
                //    required: "First Name is required.",
                //  })}
                {...register("username", {
                    required: "Required username",
                  })}

                
                   error={Boolean(errors.username)}
                   helperText={errors.username?.message}
                
                />
                
                <TextField 
                 label='Password' 
                 name='password' 
                 placeholder='Enter password' 
                 type='password' 
                 fullWidth 
                //  required 
                 {...register("password", {
                    required: "Required password",
                   
                  })}

                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
              
                  />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                </form>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login