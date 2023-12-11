import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { useNavigate } from 'react-router-dom'


const OuterBox=styled(Box)(({theme})=>({
  background:"black",

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

  width:1260,


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


const Text=styled(Typography)(({theme})=>({

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


const BoxItem=styled(Box)(({theme})=>({

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


const ButtonBox=styled(Box)(({theme})=>({

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


function Home() {

  const mainData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  console.log("mainData",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])
  
   let rado=[{
     img:"https://www.rado.com/media/sgecom_contentsystem/PDP_Images/Carousel_5000x3756_2.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center",
     id:1
          }]

          const handleTrueSquare=()=>{
            navigate('/square')
          }

          const handleCentrix=()=>{
            navigate('/centrix')
          }

          const handleCollections=()=>{
            navigate('/collections')
          }

          const handleWatch=(id)=>{
           navigate(`/detail/${id}`)
          }
          const handleImage=()=>{
            navigate(`/detail/6`)
          }

  
  return (
    <OuterBox >
     
      <ImageBox  as="img" src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill" />
      
      <FirstBox sx={{marginTop:-33}}>
    <Text sx={{color:'white', fontSize:36, marginRight:50}}>CENTRIX AUTOMATIC DIAMONDS</Text>
    
    <ButtonBox onClick={handleImage} textAlign={"center"} sx={{cursor:'pointer', color:"white",border:"1px solid white",width:150,height:50, 
    borderRadius:30}}>Discover more</ButtonBox>

    </FirstBox>
   
    <InnerContainer width={300} sx={{color:'white',marginTop:27}}>
     <Text>Explore our latest creations</Text><br/>
     <Text >Rado is known as the Master of Materials: from high-tech ceramic to sapphire crystal and diamonds to stainless steel, our innovative watches have no boundaries when it comes to design. Feel and discover the Rado difference!</Text>
     
    <BoxItem sx={{display:"flex", width:1260, overflow:'auto'}}>

      {rado.map((item)=>(
        <>
        <ImageBox onClick={()=>handleWatch(item.id)} sx={{width:500}} as={'img'} src={item.img}/>
        </>
      ))}
     
      <ImageBox onClick={handleTrueSquare} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/true-square-skeleton-all-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
     
      <ImageBox onClick={handleCentrix} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/new-centrix-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
      
       <ImageBox onClick={handleCollections} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/view-all-collections.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
      
      
    </BoxItem>
     
     
     </InnerContainer>
    </OuterBox>
  )
}

export default Home