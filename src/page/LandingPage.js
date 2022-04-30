import * as React from 'react';

import SemiDonutChart from './components/SemiDonutChart';
import AreaInstalled from './components/AreaInstalled';
import Carts from './components/Carts';
import Box from '@mui/material/Box';
import Logo from '../images/logo.png';
import Profile from '../images/profile.png';
import Wellcome from '../images/wellcome.png';
import { Typography, Grid, Paper,Badge  } from '@mui/material';
import AdjustTwoToneIcon from '@mui/icons-material/AdjustTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CardTravelSharpIcon from '@mui/icons-material/CardTravelSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';





function LandingPage(){
    return(

        <React.Fragment>
       <Grid container >
           {/**-----------------------Left box------------------- */}
           <Grid item xs={2}>
               <Box style={{display:'flex', justifyContent:'space-Between',
                paddingLeft:5, paddingRight:5 }}>
                   <img src={Logo} style={{height:15 }}  alt="logo"/>
                   
                    <AdjustTwoToneIcon style={{ height:15}}/>                   
               </Box>
               <Paper elevation={3}  style={{ hight:18, marginTop:20, padding:5, display:'flex', justifyContent:'space-around',backgroundColor:"#0000002f" }}>
               <img src={Profile} alt="profile_pic"/>
               <Box mt={2} style={{textAlign:'left'}}>
               <Typography variant='subtitle1'> Minimal UI</Typography>
               <Typography variant='paragraph' style={{fontSize:12, color:'rgba(10, 10, 10, 0.693)' }}>admin</Typography>
               </Box>
           </Paper>
           <Typography variant='subtitle1' mt={3} ml={4} >GENERAL</Typography>

           <Box style={{display:'flex', padding:2}}>
               <Box ml={2} mr={4} >
           < AddTaskIcon style={{fontSize:16}} />
                 </Box>
                 <Box>
             <Typography variant='body2'> 
                 App
              </Typography>
              </Box>
           </Box>

           <Box style={{display:'flex' , padding:2}}>
               <Box  ml={2} mr={4}>
           < CardTravelSharpIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 E-Commerce
              </Typography>
              </Box>
           </Box>
           <Box style={{display:'flex' , padding:2}}>
               <Box  ml={2} mr={4}>
           < BarChartSharpIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 Analytics
              </Typography>
              </Box>
           </Box>
           <Box style={{display:'flex' , padding:2}}>
               <Box  ml={2} mr={4}>
           < AccountBalanceIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 Banking
              </Typography>
              </Box>
           </Box>
           <Box style={{display:'flex', padding:2}}>
               <Box  ml={2} mr={4}>
           < EventRepeatIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 Booking
              </Typography>
              </Box>
           </Box>

           <Typography variant='subtitle1' mt={3} ml={4} >MANGEMENT</Typography>

           <Box style={{display:'flex', padding:2}}>
               <Box  ml={2} mr={4}>
           < PersonIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 User
              </Typography>
              </Box>
           </Box>
           <Box style={{display:'flex', padding:2}}>
               <Box  ml={2} mr={4}>
           <ShoppingCartIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 E-Commerce
              </Typography>
              </Box>
           </Box>
           <Box style={{display:'flex', padding:2}}>
               <Box  ml={2} mr={4}>
           < BookTwoToneIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 Blog
              </Typography>
              </Box>
           </Box>
           <Typography variant='subtitle1' mt={3} ml={4} >APP</Typography>
           <Box style={{display:'flex', padding:2}}>
               <Box  ml={2} mr={4}>
           <MailTwoToneIcon style={{fontSize:16}} />
           </Box>
           <Box>
             <Typography variant='body2'> 
                 Mail
              </Typography>
              </Box>
              <Badge badgeContent={5} color="error" style={{marginLeft:80, marginTop:7, color:'pink'}}>
              </Badge>
           </Box>
           

           

           

           

           </Grid>
           {/**--------------------Right box -----------------------*/}
           <Grid item  xs={10} pl={5} > 
           <Box style={{display:'flex', justifyContent:"space-between",paddingBottom:25}}>
               <Box>
                <SearchIcon style={{marginTop:15}}/>
               </Box>
               <Box>
               <SportsScoreIcon style={{marginRight:15}}/>
               <NotificationsIcon style={{marginRight:15}}/>
               <PeopleIcon style={{marginRight:15}}/>
               <Badge badgeContent={4} color="error">
               <img src={Profile}  style={{borderRadius:50}}alt="profile_pic"/>
               </Badge>
               </Box>
            </Box >
           <Box>
               <Grid container spacing={2}>
                   <Grid item xs={8}>
                        <Paper elevation={6} style={{display:'flex', backgroundColor:"lightgreen"}}>
                            <Box pl={5} pt={5}>
                            <Typography variant="h6"> Wellcome Back,</Typography>
                            <Typography variant="h6" > Minimal UI!</Typography>
                            <Typography variant="h6" ></Typography>
                            <Typography variant="body">If you are going to a passage of Lorem lpsum you need to be sure there isn't anything</Typography>
                            </Box>
                            <img src={Wellcome} style={{ width:250, height:200}}/>
                        </Paper>
                   </Grid>
                   <Grid item xs={4}>
                       <Paper elevation={6} style={{backgroundColor:'rgba(212, 126, 126, 0.993)'}}>
                           <Box>
                               <Typography variant='body2' pt={10} pl={5}> Featured App</Typography>
                               <Typography varient='subtitle1' pl={5}>Disney Zoombies 2</Typography>
                               <Typography variant='body2' pl={5} pb={7}>Beleving These 7 myths About Even Keeps...</Typography>
                           </Box>
                       </Paper>
                   </Grid>
               </Grid>
           </Box>
           <Box>
               <Grid container>
                   <Grid item xs={12}>
                   <Carts/>
                   </Grid>
              
               </Grid>
           </Box>
           <Box>
               <Grid container>
                   <Grid item xs={4}>
                        <SemiDonutChart/>
                    </Grid>
                    <Grid item xs={8}>
                       <AreaInstalled/>   
                    </Grid>
             
              </Grid>
           </Box>
           
           </Grid>
       </Grid>
      </React.Fragment>
    )
}
export default LandingPage;