import React from 'react'
import { Box } from '@mui/material'
import CultureBanner from './CultureBanner'
import imgBackground from '../../assets/Rectangle 5448.png'
import overview from '../../assets/Overview menu.png'
import imgCircle from '../../assets/Mask group.png'

export default function Geografhy() {
  return (
    <>
    <CultureBanner componentText={"In this category you will identify cultural information to meet the client's background."}/>

    <Box component="section" sx={{ 
      p: 1, 
      bgcolor: '#F5F5F5',
      borderRadius: 5,
      marginTop: '30px',
      }}>
      
      <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          m: 1,
          borderRadius: 1,
        }}>
          <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          m: 1,
          borderRadius: 1,
        }}>Home  |</Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          m: 1,
          color: '#DF5B17',
          borderRadius: 1,
        }}>Geografhy (12 points)</Box>
      </Box>
      
      <Box component="section" sx={{
        display:'flex',
        justifyContent:'space-evenly',

      }}>
      <Box sx={{
        p: 1, 
        bgcolor: '#F5F5F5',
        borderRadius: 5,
        marginTop: '30px'
      }}>
        <Box sx={{
          display:'flex',
          borderRadius: 1,
          fontWeight:'bold'
        }}>Weather at USA
        </Box>
        <img src={imgBackground} alt="imgBackground" width={500}/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          borderRadius: 1,
          fontWeight:'bold',
          marginTop:'10px'
        }}>USA Weather Whirl: Discover the Magic of All 4 Seasons!
        </Box>
        <Box sx={{
          marginTop:'10px',
          fontSize:'12px',
          textAlign:'left'
        }}>The weather at the United States varies due to changes in the latitude and a range of geographic features. The time when the sun is most present 
        varies depending on the position of the earth with respect to it, those time of the tear are also divided in seasons in 4 different seasons:        
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'start',
          margin:'10px'
        }}>
        <Box sx={{
          margin:'10px',
          fontSize:'12px',
          textAlign:'left'
        }}><img src={imgCircle} width={120}/>       
        </Box>
        <Box sx={{
          marginTop:'10px',
          fontSize:'12px',
          textAlign:'left'
        }}>In the United States, spring generally spans from March to May. During this season, many cities experience mild weather and blooming flowers. 

        Here is a list of some U.S. cities that enjoy spring during this period:
        
        Washington, D.C.
        New York, New York
        San Francisco, California        
        </Box>
        </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'start',
          margin:'10px'
        }}>
          <img src={overview} width={300}/>
      </Box>

      </Box>
      

    </Box>
    </>
  )
}