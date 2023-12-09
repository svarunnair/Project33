import { Box, styled } from '@mui/material'
import React from 'react'


const outerConteiner=styled(Box)(({theme})=>({

    [theme.breakpoints.down("xl")]:{

    },
    [theme.breakpoints.down("lg")]:{

    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
}))






function Navbar() {
  return (
    <outerConteiner >

    </outerConteiner>
  )
}

export default Navbar