import { Box, Button, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { useNavigate } from 'react-router-dom'


const OuterBox=styled(Box)(({theme})=>({
  background:"white",

  

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

  width:"100%",


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
     
      <ImageBox sx={{}} 
       as="img" 
       src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill" />
    <Text sx={{color:'white', fontSize:36,position:'absolute',top:210,right:550}}>CENTRIX AUTOMATIC DIAMONDS</Text>
    
    <ButtonBox onClick={handleImage} textAlign={"center"} sx={{cursor:'pointer',
    color:"white",width:150,top:290,position:'absolute',left:100,height:50,border:"1px solid white",
    borderRadius:30}}>Discover more</ButtonBox>
    {/* <InnerContainer  sx={{color:'white',bgcolor:'black'}}> */}
   <FirstBox sx={{textAlign:'center',bgcolor:"black",color:'white'}}>
     <Text sx={{fontSize:33}}>Explore our latest creations</Text><br/>
     <Text sx={{fontSize:22}} >Rado is known as the Master of Materials: from high-tech ceramic to sapphire crystal and diamonds to stainless steel, our innovative watches have no boundaries when it comes to design. Feel and discover the Rado difference!</Text>
     </FirstBox>
    <BoxItem sx={{display:"flex", overflow:'auto'}}>

      {rado.map((item)=>(
        <>
        <ImageBox onClick={()=>handleWatch(item.id)} sx={{width:500}} as={'img'} src={item.img}/>
        </>
      ))}
     
      <ImageBox onClick={handleTrueSquare} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/true-square-skeleton-all-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
     
      <ImageBox onClick={handleCentrix} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/new-centrix-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
      
       <ImageBox onClick={handleCollections} sx={{width:500}} as={'img'} src="https://www.rado.com/media/sgecom_contentsystem/homepage/view-all-collections.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
      
      
    </BoxItem>
     
     <FirstBox  sx={{width:1258,height:770,bgcolor:'white',textAlign:"left",display:"flex"}}>

      <SecondBox sx={{color:"black" , width:450,padding:12,marginTop:5}}>
        <Text sx={{fontSize:36}}> 5-year International Warranty</Text>

        <Text sx={{fontWeight:900,marginTop:4}}> As of 1st November 2023, all new Rado watches benefit from a 5-year International Warranty.</Text>
      
       <Text sx={{marginTop:4}}>At Rado we have always made watches that are built to last – not just for a few years, but for a lifetime. We take care to use materials that are proven to resist wear and tear. High-tech ceramic cases and bracelets, Ceramos™, sapphire crystal, stainless steel and titanium all serve to enclose and protect the sophisticated Swiss movements that power our watches. We take great pride in the high quality, reliability and performance of our products, and are pleased to offer our customers additional support in the care and handling of their watches.
       </Text> 
       <Text sx={{fontWeight:900}}>_____</Text>

       <Text  sx={{marginTop:3,cursor:'pointer'}}>Discover more {">"}</Text>
       </SecondBox>

       <SecondBox>
        <ImageBox sx={{width:700,marginTop:15}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-extension-homepage-block.jpg?im=Resize=(800,657),aspect=fill;Crop=(0,0,800,657),gravity=Center"/>
       </SecondBox>

     </FirstBox>

     <FirstBox sx={{width:1258,height:500,bgcolor:"#F0F0F0"}}>
      <FirstBox  >
      <Text sx={{color:'black',fontSize:33}}>Our gift ideas for you</Text>
      </FirstBox>
      <SecondBox maxWidth={1300} sx={{overflow:"auto",display:'flex'}}>
        {mainData.map((item)=>(
          <FirstBox sx={{color:'black'}} display={"grid"}>
          <ImageBox onClick={()=>handleWatch(item.id)}  sx={{width:250,cursor:'pointer'}} as={"img"} src={item.images[0]}/>
          <Text>{item.name}</Text>
          <Text sx={{color:"grey"}}>{item.model}</Text>
          <Text sx={{color:"grey"}}>{item.size}</Text>
          <Text>₹ {item.price}.00</Text>
          </FirstBox>
        ))}
      </SecondBox>
     

     </FirstBox>

<InnerContainer  sx={{bgcolor:"white",color:'black',width:1263,height:290, display:"flex"}}>
     <FirstBox  >
      <ImageBox sx={{width:420, }} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/captain-cook-chronograph_1.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
    <Text sx={{marginTop:-20,color:'white',fontWeight:900}}>Chronography watches</Text>
    <ButtonBox sx={{color:'white', }}>Discover more</ButtonBox>
    </FirstBox>
    <FirstBox>
    <ImageBox sx={{width:420,border:"1px solid White"}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/skeleton-watches.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
    <Text sx={{marginTop:-20,color:'white',fontWeight:900}}>Chronography watches</Text>
    <ButtonBox sx={{border:"1px solid white",color:'White'}}>Discover more</ButtonBox>
    
    </FirstBox>
    <FirstBox>
    <ImageBox sx={{width:420,border:"1px solid White"}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/captain-cook-over-pole.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
    <Text sx={{marginTop:-20,color:'white',fontWeight:900}}>Chronography watches</Text>
    <ButtonBox sx={{color:'White'}}>Discover more</ButtonBox>
    </FirstBox>

     </InnerContainer>


     <InnerContainer sx={{display:"flex",}}>
     <FirstBox>
     <ImageBox sx={{width:630,border:"1px solid White"}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Campaigns/2023/Christmas/men-watches-christmas.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
    <Text sx={{marginTop:-20,color:'white',fontWeight:900}}>Chronography watches</Text>
    <ButtonBox>Discover more</ButtonBox>
     </FirstBox>
     <FirstBox>
     <ImageBox sx={{width:630,border:"1px solid White"}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Campaigns/2023/Christmas/women-watches-christmas.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
    <Text sx={{marginTop:-20,color:'white',fontWeight:900}}>Chronography watches</Text>
    <ButtonBox>Discover more</ButtonBox>
     </FirstBox>
     </InnerContainer>
    
<FirstBox sx={{display:'flex',bgcolor:"#E8E8E8"}}>
     <SecondBox sx={{bgcolor:"white",textAlign:"left",width:300,padding:12,marginTop:23,bgcolor:"#E8E8E8"}}>
<Text sx={{color:'black',fontWeight:200,fontSize:22}}> Master of materials</Text>
<Text sx={{color:'black',marginTop:2,fontWeight:300,fontSize:33}}>The unconventional beauty of ceramic</Text>
<Text sx={{color:'black',marginTop:2,fontWeight:200,fontSize:17}}> Hypoallergenic comfort, lightness and the very special sensation of ceramic against your skin – unmistakable, sensual and unique with Rado high-tech ceramic.</Text>
    <Text sx={{fontWeight:900}}>____</Text>
    <Text sx={{cursor:'pointer'}}>Discover the world of ceramics{">"}</Text>
    
     </SecondBox>

     <SecondBox>
      <ImageBox sx={{width:650,height:500,marginTop:30,marginLeft:26}} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage-master-of-materials-image-card.jpg?im=Resize=(800,657),aspect=fill;Crop=(0,0,800,657),gravity=Center"/></SecondBox>
     </FirstBox>

    <InnerContainer sx={{display:'flex',}}>
      <FirstBox  sx={{width:650,height:500, padding:10}}>
        <Text sx={{fontSize:32}}>Rado Customer Service</Text>
        <Text sx={{marginTop:4}}>Access the most exclusive services and discover the wealth of knowledge of our Customer Service Team.</Text>
        <ButtonBox sx={{border:"1px solid black",width:200, height:42,marginLeft:17,marginTop:10,borderRadius:5,color:'white',bgcolor:"black"}}>Contact Us</ButtonBox>
      </FirstBox>
      <FirstBox  sx={{width:650,height:500,padding:10}}>
        <Text sx={{fontSize:32}}>Rado Store Locator</Text>
        <Text sx={{marginTop:4}}>Find your nearest store, boutique or service centre.</Text>
        <ButtonBox sx={{width:160, height:42,marginLeft:17,marginTop:13,borderRadius:5,color:'white',bgcolor:"black"}}>Find a store</ButtonBox>
      </FirstBox>
    </InnerContainer>
    </OuterBox>
  )
}

export default Home