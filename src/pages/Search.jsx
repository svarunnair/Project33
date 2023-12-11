import { Box, Grid, Input, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData } from '../Redux/data/action'

const OuterContainer=styled(Box)(({theme})=>({
    
    height:900,
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

      const ImageBox=styled(Box)(({theme})=>({
    
        
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


          const InnerBox=styled(Box)(({theme})=>({
    
            
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

              const TextBox=styled(Box)(({theme})=>({
    
                height:900,
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

function Search() {

    const navigate=useNavigate()
    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const [search,setSearch]=useState([])


    const handleSearch=(e)=>{
        let value=e.target.value 
        let sortData=mainData.filter(item=>item.name.toLowerCase().includes(value))
        setSearch(sortData)
    }
    console.log("sortData")

    useEffect(()=>{
      dispatch(getData())
    },[])

    // useEffect(()=>{
    //  setSearch(mainData)
    // },[mainData])
    

   

  return (
    <OuterContainer>

  <Input onChange={handleSearch}  sx={{marginTop:13 ,width:600, height:85, border:"1px solid black"}} placeholder='What are you lookig for'/>

<InnerBox>
    {search.map((item)=>(
        <>
        <TextBox sx={{fontSize:16}}>{item.name}</TextBox>
        <ImageBox sx={{height:200, marginTop:-300}} as={"img"} src={item.images[0]} />
        </>
    ))}

</InnerBox>
    </OuterContainer>
  )
}

export default Search