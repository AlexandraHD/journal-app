import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form action="">
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Name" 
                type="text" 
                placeholder="your name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="mail" 
                type="mail" 
                placeholder="mail@mail.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="password" 
                type="password" 
                placeholder="your password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 3}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Create
                </Button>
              </Grid>
              
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
        
  )
}
