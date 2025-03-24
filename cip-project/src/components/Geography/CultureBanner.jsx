import React from 'react'
import logo from '../../assets/masimo-logo.png'
import { Box } from '@mui/material'

export default function CultureBanner({componentText}) {
  return (
    <>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <img src={logo} alt="massimologo" height={30} width={50}/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          bgcolor: 'background.paper',
          borderRadius: 1,
          typography: 'subtitle2',
          fontWeight: 'bold',
          fontSize: 'h6.fontSize'
        }}
      >
        Culture specifics
        
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        {componentText}
      </Box>
      
        
    </>
  )
}