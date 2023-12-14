import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getDetail, postInfo } from '../Redux/data/action'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Typography, styled } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey } from '@mui/material/colors'




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


  const FirstBox=styled(Box)(({theme})=>({
    
  
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

  const SecondBox=styled(Box)(({theme})=>({
    
  
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

    const handleCall=()=>{
      dispatch(postInfo(detail))
      navigate('/info')
    }
   



  return (
    <OuterContainer>
   <InnerBox sx={{marginTop:8 ,width:"50%"}} height={600} bgcolor={"#F0F0F0"} marginRight={70}>
    <ButtonBox  onClick={handlePrev} sx={{fontSize:"x-large", marginBottom:50}}><ArrowBackIcon/></ButtonBox>
    <ImageBox sx={{marginTop:8}} width={400} as={'img'} src={dataImage[count]}/>

    <ButtonBox onClick={handleNext} sx={{fontSize:"x-large", marginBottom:50}}><ArrowForwardIcon/></ButtonBox>
   </InnerBox>
   
   <TextBox marginLeft={100} marginBottom={100} marginTop={-58} sx={{textAlign:"left",padding:3}}>
   <TextBox sx={{textAlign:"left",fontSize:35, fontWeight:500}}>{detail.name}</TextBox>
   <TextBox sx={{fontSize:13,color:'grey'}}>{detail.model}</TextBox>
   <TextBox sx={{fontSize:13,color:'grey'}}>{detail.size}</TextBox>
   <InnerBox sx={{display:'flex'}}>
   <TextBox sx={{fontSize:14,cursor:'pointer'}}>View full details {">"}</TextBox>
   <TextBox sx={{fontSize:14,cursor:'pointer'}}> Add to Compare {">"}</TextBox>
   <TextBox sx={{fontSize:14,cursor:'pointer'}}> Open comparator {">"}</TextBox>

   </InnerBox>
   <TextBox sx={{fontSize:22,marginTop:4}}>₹ {detail.price}.00</TextBox>
   <TextBox sx={{color:"grey",fontSize:15}}>Maximum retail price (gst incl.). This maximum retail price is applicable for imports in India effect from 1st February 2023. Retailers may have stock at different MRP based on their date of purchase.</TextBox>
   <TextBox onClick={()=>handleCall()} sx={{cursor:"pointer",textDecoration:"underline",fontSize:17,marginTop:3}}>Call me back</TextBox>
   </TextBox>

<FirstBox sx={{width:900,marginTop:-65,marginLeft:23}}>
   <TextBox sx={{textAlign:"center",fontSize:22}}>{detail.description}</TextBox>

   <TextBox sx={{color:"grey",marginTop:10,marginLeft:-14}}>__________________________________________________________Specification__________________________________________________________</TextBox>
   
   <FirstBox sx={{display:"flex",marginLeft:-22,width:"100%"}}>
    <SecondBox sx={{display:"grid",textAlign:"left",padding:5,}}>
      <TextBox sx={{fontSize:17}}>General</TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>Engravable:<TextBox sx={{color:'grey',fontSize:13}}>{detail.Engravable}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>Product Name:<TextBox sx={{color:'grey',fontSize:13}}>{detail.ProductName}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>SKU:<TextBox sx={{color:'grey',fontSize:13}}>{detail.SKU}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>Gende:<TextBox sx={{color:'grey',fontSize:13}}>{detail.Gender}</TextBox></TextBox>
    </SecondBox>
    <SecondBox sx={{display:"grid",textAlign:"left",padding:5,marginLeft:3}}>
      <TextBox sx={{fontSize:17}}>Movement</TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>Movement Type:<TextBox sx={{color:'grey',fontSize:13}}>{detail.MovementType}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>Movement Reference:<TextBox sx={{color:'grey',fontSize:13}}>{detail.MovementReference}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}> CaseMaterials:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseMaterials}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>CaseThickness:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseThickness}</TextBox></TextBox>
    </SecondBox>
    <SecondBox sx={{display:"grid",textAlign:"left",padding:5,marginLeft:3}}>
      <TextBox sx={{fontSize:17}}>Case</TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>CaseWaterResistance:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseWaterResistance}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>CaseColour:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseColour}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>CaseDimension:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseDimension}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>CaseCrystal:<TextBox sx={{color:'grey',fontSize:13}}>{detail.CaseCrystal}</TextBox></TextBox>
    </SecondBox>
    <SecondBox sx={{display:"grid",textAlign:"left",padding:5,marginLeft:3}}>
      <TextBox sx={{fontSize:17}}>Dial</TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>DialColour:<TextBox sx={{color:'grey',fontSize:13}}>{detail.DialColour}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>DialHasDate:<TextBox sx={{color:'grey',fontSize:13}}>{detail.DialHasDate}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>DialHasJewels:<TextBox sx={{color:'grey',fontSize:13}}>{detail.DialHasJewels}</TextBox></TextBox>
      <TextBox sx={{fontSize:13,display:'flex'}}>MotherOfPearl:<TextBox sx={{color:'grey',fontSize:13}}>{detail.MotherOfPearl}</TextBox></TextBox>
    </SecondBox>
    <SecondBox sx={{display:"grid",textAlign:"left",padding:5,marginLeft:3}}>
      <TextBox sx={{fontSize:17}}>Bracelet</TextBox>
      <TextBox sx={{fontSize:13,display:"flex" ,marginTop:-12}}>JewelDetails:<TextBox sx={{color:'grey',fontSize:13}}>{detail.JewelDetails}</TextBox></TextBox>
      </SecondBox>
   </FirstBox>
   </FirstBox>
    </OuterContainer>
  )
}

export default Detail