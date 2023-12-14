import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


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

const TextBox=styled(Typography)(({theme})=>({

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

function Collections() {

  const navigate=useNavigate()


  const handleProduct=()=>{
    navigate('/captain')
  }
  
  return (
<OuterContainer>

  <InnerContainer sx={{textAlign:'center',marginTop:10}}>
    <TextBox sx={{fontSize:"40px"}}>Discover our collections</TextBox>
    <InnerContainer marginLeft={10} sx={{display:"flex" ,cursor:"pointer"}}>
     
      <InnerContainer display={'grid'}>
      <ImageBox as={'img'} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/a/captaincook_r32129152_sld_web_1.png"/>
      <TextBox >Captain Cook</TextBox>
     </InnerContainer>
     <InnerContainer display={'grid'}>
    <ImageBox as={'img'} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/r/g/rgb_cat_truesquare_734_6086_3_016_3.png"/>
    <TextBox>True Square</TextBox>
    </InnerContainer>
    <InnerContainer display={'grid'}>
    <ImageBox as={'img'} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/e/centrix_r30019744_sld_web.png"/>
    <TextBox>Centrix</TextBox>
    </InnerContainer>
    <InnerContainer display={'grid'}>
    <ImageBox as={'img'} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/t/r/true_r27100162_sld_web.png"/>
    <TextBox>True Round</TextBox>
    </InnerContainer>
    
    <InnerContainer display={'grid'}>
    <ImageBox as={'img'} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/a/cat_originaldiastar_764_6163_3_511_r12163118_web.png"/>
    <TextBox>DiaStar Original</TextBox>
    </InnerContainer>
   </InnerContainer>
    

  </InnerContainer>

  <InnerContainer  sx={{marginTop:15, bgcolor:'black', height:2612}}>

  <InnerContainer sx={{display:'flex'}}>
    <InnerContainer sx={{padding:10,textAlign:'left', marginTop:10}}>
    <TextBox sx={{color:'white' ,fontSize:45}}>Captain Cook</TextBox>
    <TextBox sx={{color:'white'}}>Charting new territory in vintage watches, the Rado Captain Cook is a natural choice for modern explorers. Its vintage details, and up-to-date features make it the perfect watch for men and women.</TextBox>
  <ButtonBox onClick={handleProduct} sx={{marginTop:8,borderRadius:40, bgcolor:'white', height:55, border:"1px solid white"}}>
Explore Collection
  </ButtonBox>
  </InnerContainer>
  <ImageBox as={'img'} width={750} src="https://www.rado.com/media/catalog/category/captain-cook-htc-diver-category-image.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>
  </InnerContainer>
  


  <InnerContainer sx={{display:"flex"}}>
  <ImageBox  sx={{width:770}} as={'img'}  src="https://www.rado.com/media/catalog/category/CollectionList-truesquare-2880x1400.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>


<InnerContainer padding={10} marginTop={10} textAlign={"left"}>
<TextBox sx={{color:'white' ,fontSize:45}}>True Square</TextBox>
    <TextBox sx={{color:'white'}}>True Square
At Rado, we don’t just know square high-tech ceramic watches: We invented them! The True Square features a full high-tech ceramic case and bracelet, meeting every Rado requirement.</TextBox>
  <ButtonBox sx={{marginTop:8,borderRadius:40, bgcolor:'white', height:55, border:"1px solid white"}}>
Explore Collection
  </ButtonBox>
</InnerContainer>
  </InnerContainer>



  <InnerContainer sx={{display:'flex'}}>
    <InnerContainer sx={{padding:10,textAlign:'left', marginTop:10}}>
    <TextBox sx={{color:'white' ,fontSize:45}}>Centrix</TextBox>
    <TextBox sx={{color:'white'}}>There is a reason why Centrix is Rado’s most popular watch. Its versatility in a range of different sizes, colour combinations, quartz and automatic movements guarantees there is a model to suit all tastes.</TextBox>
  <ButtonBox sx={{marginTop:8,borderRadius:40, bgcolor:'white', height:55, border:"1px solid white"}}>
Explore Collection
  </ButtonBox>
  </InnerContainer>
  <ImageBox as={'img'} width={750} src="https://www.rado.com/media/catalog/category/centrix.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>
  </InnerContainer>



  <InnerContainer sx={{display:"flex"}}>
  <ImageBox  sx={{width:770}} as={'img'}  src="https://www.rado.com/media/catalog/category/CollectionList-true-2880x1400.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>


<InnerContainer padding={10} marginTop={10} textAlign={"left"}>
<TextBox sx={{color:'white' ,fontSize:45}}>True Round</TextBox>
    <TextBox sx={{color:'white'}}>Reimagined for modern wearers, but reliably and distinctively Rado. Made of full high-tech ceramic, the True collection represents Rado’s true style and design substance..</TextBox>
  <ButtonBox sx={{marginTop:8,borderRadius:40, bgcolor:'white', height:55, border:"1px solid white"}}>
Explore Collection
  </ButtonBox>
</InnerContainer>
  </InnerContainer>


  <InnerContainer sx={{display:'flex'}}>
    <InnerContainer sx={{padding:10,textAlign:'left', marginTop:10}}>
    <TextBox sx={{color:'white' ,fontSize:45}}>DiaStar Original</TextBox>
    <TextBox sx={{color:'white'}}>Incorporating the bold and ageless appeal of the first DiaStar, the Original bears the features and functions Rado enthusiasts know and the distinctive look they love.</TextBox>
  <ButtonBox sx={{marginTop:8,borderRadius:40, bgcolor:'white', height:55, border:"1px solid white"}}>
Explore Collection
  </ButtonBox>
  </InnerContainer>
  <ImageBox as={'img'} width={750} src="https://www.rado.com/media/catalog/category/diastar-original.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>
  </InnerContainer>

  </InnerContainer>


<SecondBox sx={{display:'flex'}}>



  <InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_true_thinline_420_0009_3_018_3.png"/>
  <InnerContainer textAlign={"left"} >
  <TextBox sx={{fontSize:30}}>True Thinline</TextBox>
  <TextBox sx={{color:'grey'}}>The True Thinline could be considered the ultimate Rado timepiece. These stunning quartz watches are Rado’s slimmest and the first to feature the groundbreaking monobloc case.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>


<InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox  width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_hyperchrome_312_0259_3_020_3.png"/>
  <InnerContainer textAlign={"left"}>
  <TextBox sx={{fontSize:30}}>HyperChrome</TextBox>
  <TextBox sx={{color:'grey'}}>The HyperChrome collection is full of ceramic watches, innovations and sleek design, delivering a groundbreaking Rado timepiece. A watch that delivers all the functions with the style you want.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>



</SecondBox>

<SecondBox sx={{display:'flex'}}>



  <InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_golden_horse_763_3930_4_031_3.png"/>
  <InnerContainer textAlign={"left"} >
  <TextBox sx={{fontSize:30}}>HyperChrome Classic</TextBox>
  <TextBox sx={{color:'grey'}}>The HyperChrome Classic collection combines the past, present and future of Rado creating stylish women’s and men’s vintage watches. Sleek design, modern materials and breakthrough technology which give a unique look that is distinctively Rado.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>


<InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox  width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_coupole_763_3860_4_104_3.png"/>
  <InnerContainer textAlign={"left"}>
  <TextBox sx={{fontSize:30}}>Coupole</TextBox>
  <TextBox sx={{color:'grey'}}>The Coupole Classic takes the design of a traditional wristwatch and adds the distinctive Rado element of sapphire crystal. An elegant timepiece for men or women designed to stand the test of time</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>



</SecondBox>


<SecondBox sx={{display:'flex'}}>



  <InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/c/a/cat_florence_073_3912_4_071_r48912713_soldier_web_1.png"/>
  <InnerContainer textAlign={"left"} >
  <TextBox sx={{fontSize:30}}>Florence</TextBox>
  <TextBox sx={{color:'grey'}}>The harmonious design of the Rado Florence calls to mind the elegant domes and towers of the city from which the collection takes its name.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>


<InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox  width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_integral_212_0227_3_071_3.png"/>
  <InnerContainer textAlign={"left"}>
  <TextBox sx={{fontSize:30}}>Integral</TextBox>
  <TextBox sx={{color:'grey'}}>The iconic Integral has been redesigned to suit the contemporary needs and preferences of today’s wearers, remaining true to the original look and feel.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>



</SecondBox>


<SecondBox sx={{display:'flex'}}>



  <InnerContainer padding={10} sx={{display:"flex"}}>
  <ImageBox width={130} height={100} as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_diamasterthinline_766_6068_3_420_3.png"/>
  <InnerContainer textAlign={"left"} >
  <TextBox sx={{fontSize:30}}>DiaMaster</TextBox>
  <TextBox sx={{color:'grey'}}>The elegant and subtle side of Rado’s ultra-durable watches, the DiaMaster family draws its inspiration from classic simplicity. Unveiled with a complete redesign, the collection is delightfully diverse.</TextBox>
  <TextBox>Explore Connection</TextBox>
  </InnerContainer>
  
</InnerContainer>




</SecondBox>

</OuterContainer>
    
  
  )
}

export default Collections