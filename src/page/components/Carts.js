import React from "react";
import {Typography, Paper, Grid, Box } from "@mui/material";
import './carts.css'
import GraphOne from '../../images/gaph1.png';
import GraphTwo from '../../images/gaph2.png';
import GraphThree from '../../images/gaph3.png';
import UpGraph from '../../images/up-graph.png';
import DownGraph from '../../images/downimage.jpg';


function Carts(){
    return(
        
            <Grid container spacing={2} mt={3}>
                <Grid item xs={4}>
                    <Paper elevation={9} style={{display:'flex'}}>
                        <Box>
                            <Typography variant="h6" pl={3} pt={4}>
                                Total Active User
                                </Typography>
                            <Typography variant="subtitle2" pl={3}> <img src={UpGraph} alt={'upgraph'} style={{hight:20, width:20, borderRadius:10}} />+2.6%
                            </Typography>
                            <Typography variant="h4" pl={3}>
                                18,765
                            </Typography>
                        </Box>
                        <img src={GraphTwo} alt={'graphtwo'} style={{height:20, width:60, marginTop:40, marginLeft:75}}/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={9} pb={2} style={{display:'flex'}}>
                        <Box>
                            <Typography variant="h6" pl={3} pt={4}>
                                Total installed
                                </Typography>
                            <Typography variant="subtitle2" pl={3}> <img src={UpGraph} alt={'upgraph'} style={{hight:20, width:20, borderRadius:10}} /> +0.2%
                            </Typography>
                            <Typography variant="h4" pl={3}>
                                4,876
                            </Typography>
                        </Box >   
                        <img src={GraphOne} style={{height:20, width:60, marginTop:40, marginLeft:75}}/> 
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={9} style={{display:'flex'}}>
                        <Box>
                            <Typography variant="h6" pl={3} pt={4}>
                                Total Download
                                </Typography>
                            <Typography variant="subtitle2" pl={3}> <img src={DownGraph} alt={'downgraph'} style={{hight:25, width:25, borderRadius:20}}/> -0.1%
                            </Typography>
                            <Typography variant="h4" pl={3} >
                                678
                            </Typography>
                        </Box>   
                        <img src={GraphThree} style={{height:20, width:60, marginTop:40, marginLeft:75 }} alt={'graphThree'}/> 
                    </Paper>
                </Grid>

            </Grid>


        
    )
}
export default Carts;