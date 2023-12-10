import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getDetail } from '../Redux/data/action'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Typography, styled } from '@mui/material'



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

  const ButtonBox=styled(Button)(({theme})=>({
    
  
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
    
    fontSize:"large",
    color:"black",

  
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

function Detail() {

    // const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const detail=useSelector((store)=>store.data.getDetail)
    const params=useParams()
    const [count,setCount]=useState(0)
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const [dataImage,setDataImage]=useState([])

    console.log("details",detail)
    

    useEffect(()=>{
        if(Object.keys(detail).length>0){
            setDataImage(detail?.images)
        }
    },[detail])

    useEffect(()=>{

        if(Object.keys(detail).length>0){
            setData(detail)
        }    

    },[detail])

   
useEffect(()=>{
   dispatch(getDetail(params.id))
},[params])

const handleNext=()=>{
    if(count>=3){
        setCount(0)
    }
    else{
        setCount(count+1)
    }
}

    const handlePrev=()=>{
        if(count<=0){
            setCount(3)
        }
        else{
            setCount(count-1)
        }

    }
   



  return (
    <OuterContainer>
   <InnerBox height={600} bgcolor={"grey.300"} marginRight={70}>
    <ButtonBox  onClick={handlePrev} sx={{fontSize:"x-large", marginBottom:50}}>{"<"}</ButtonBox>
    <ImageBox width={400} as={'img'} src={dataImage[count]}/>

    <ButtonBox onClick={handleNext} sx={{fontSize:"x-large", marginBottom:50}}>{">"}</ButtonBox>
   </InnerBox>
   
   <TextBox marginLeft={100} marginBottom={100} marginTop={-60}>
   <TextBox>{detail.name}</TextBox>
   <TextBox>{detail.model}</TextBox>
   <TextBox>₹ {detail.price}.00</TextBox>
   <TextBox>Maximum retail price (gst incl.). This maximum retail price is applicable for imports in India effect from 1st February 2023. Retailers may have stock at different MRP based on their date of purchase.</TextBox>
   <TextBox>Call me back</TextBox>
   </TextBox>

   <TextBox sx={{textAlign:"center"}}>{detail.description}</TextBox>

    </OuterContainer>
  )
}

export default Detail