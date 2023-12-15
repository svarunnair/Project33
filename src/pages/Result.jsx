import { Box, Typography, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from '../Redux/data/action'



const OuterContainer=styled(Box)(({theme})=>({
    
    
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


      const HeaderBox=styled(Box)(({theme})=>({

        background:"black",
        color:'white',
        border:"2px solid red",
        height:350,
        
    
    
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

      const TextBox=styled(Typography)(({theme})=>({
        fontSize:50,
    
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

      
      const InnerContainer=styled(Box)(({theme})=>({

        border:"2px solid blue",
    
    
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

      const FirstBox=styled(Box)(({theme})=>({

        border:"2px solid yellow",
    
    
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
function Result() {

    const result=useSelector((store)=>store.data.searchGet)
    const dispatch=useDispatch()

    console.log("result",result)

    useEffect(()=>{
     dispatch(getSearch())
    },[])

  return (
    <OuterContainer>

        <HeaderBox>
            <TextBox>Search results for:</TextBox>
        </HeaderBox>

        <InnerContainer>

            {result.map((item)=>(
                <FirstBox>
                {item.id}
                </FirstBox>
            ))}

            
        </InnerContainer>

    </OuterContainer>
  )
}

export default Result