import { Box, Button, Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const OuterContainer = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const ImageSlider = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  display:"flex",
  justifyContent:"center",
  height:300,

 
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    maxWidth:600,
  overflow:"auto",
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border: "2px solid blue",
  cursor:"pointer",
  ":hover":{paddingTop:10},

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Wrapper = styled(Box)(({ theme }) => ({
  // border: "2px solid blue",
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Slidertext= styled(Box)(({ theme }) => ({
  // border: "2px solid black",
  ":hover":{color:"grey"},
  cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailBox= styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display:"flex",
  background:"black",
  color:"white",
  justifyContent:"end",
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column-reverse",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailBoxTwo= styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display:"flex",
  background:"black",
  color:"white",
  justifyContent:"end",
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const DetailText= styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  paddingLeft:60,
  textAlign:"left",
  gap:15,
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailImage= styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  width:"60%",
  

  
  justifyContent:"center",
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextCaption= styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  
  fontSize:43,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextDiscription= styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BottomBox= styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  display:"flex",
  width:"100%",
  paddingTop:50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImageBottom= styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  width:"40%",
  height:"45%",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailBottom= styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  textAlign:"left",
  display:"flex",
  flexDirection:"column",
  
  
 

  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextBottom= styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  width:'65%',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerBox= styled(Box)(({ theme }) => ({

  display:"flex",
  width:"50%",
  justifyContent:"center",
  padding:30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailButton= styled(Typography)(({ theme }) => ({
  
  ":hover":{textDecoration:"underline"},
   cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ButtonDisc= styled(Button)(({ theme }) => ({
  // border: "1px solid red",

  "&:hover": {
    backgroundColor: 'white'
  },
  borderRadius:25,
  height:50,
  width:130,
  color:"black",
  background:"white",
  textAlign:"center",

   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function Collections() {
  const navigate=useNavigate()
  const handleCook=()=>{
    navigate("/captain")
  }
  const handleSquare=()=>{
    navigate("/square")
  }
  const handleCentrix=()=>{
    navigate('/centrix')
  }
  const handleItem=()=>{
    navigate('/square')
  }
  return (
<OuterContainer>


<TextBox sx={{fontSize:"48px"}}>Discover our collections</TextBox>
  <ImageSlider>
    <Wrapper>
<ImageBox onClick={handleItem} as={"img"} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/a/captaincook_r32129152_sld_web_1.png"/>
<Slidertext>Captain cook</Slidertext>
</Wrapper>

<Wrapper>
<ImageBox onClick={handleItem} as={"img"} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/r/g/rgb_cat_truesquare_734_6086_3_016_3.png"/>
<Slidertext>True Square</Slidertext>
</Wrapper>


<Wrapper>
<ImageBox onClick={handleItem} as={"img"} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/e/centrix_r30019744_sld_web.png"/>
<Slidertext>Centrix</Slidertext>
</Wrapper>

<Wrapper>
<ImageBox onClick={handleItem} as={"img"} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/t/r/true_r27100162_sld_web.png"/>
<Slidertext>True Round</Slidertext>
</Wrapper>


<Wrapper>
<ImageBox onClick={handleItem} as={"img"} src="https://www.rado.com/media/catalog/product/cache/8ebd1c1e7d8d79bd42453dff0616a9d2/c/a/cat_originaldiastar_764_6163_3_511_r12163118_web.png"/>
<Slidertext>DiaStart Original</Slidertext>
</Wrapper>




  </ImageSlider>

<DetailBox>

<DetailText>
  <TextCaption>Captain Cook</TextCaption>
  <TextDiscription>Charting new territory in vintage watches, the Rado Captain Cook is a natural choice for modern explorers. Its vintage details, and up-to-date features make it the perfect watch for men and women.
</TextDiscription>
<ButtonDisc onClick={handleCook}>Explore more</ButtonDisc>
</DetailText>

<DetailImage as={"img"} src="https://www.rado.com/media/catalog/category/captain-cook-htc-diver-category-image.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>

</DetailBox>


<DetailBoxTwo>



<DetailImage as={"img"} src="https://www.rado.com/media/catalog/category/CollectionList-truesquare-2880x1400.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>
<DetailText>
  <TextCaption> True Square</TextCaption>
  <TextDiscription>At Rado, we don’t just know square high-tech ceramic watches: We invented them! The True Square features a full high-tech ceramic case and bracelet, meeting every Rado requirement.
</TextDiscription>
<ButtonDisc onClick={handleSquare}>Explore more</ButtonDisc>
</DetailText>
</DetailBoxTwo>


<DetailBox>

<DetailText>
  <TextCaption>Centrix</TextCaption>
  <TextDiscription>There is a reason why Centrix is Rado’s most popular watch. Its versatility in a range of different sizes, colour combinations, quartz and automatic movements guarantees there is a model to suit all tastes.
</TextDiscription>
<ButtonDisc onClick={handleCentrix}>Explore more</ButtonDisc>
</DetailText>

<DetailImage as={"img"} src="https://www.rado.com/media/catalog/category/centrix.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>

</DetailBox>


<DetailBoxTwo>



<DetailImage as={"img"} src="https://www.rado.com/media/catalog/category/CollectionList-true-2880x1400.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>
<DetailText>
  <TextCaption>True Round</TextCaption>
  <TextDiscription>Reimagined for modern wearers, but reliably and distinctively Rado. Made of full high-tech ceramic, the True collection represents Rado’s true style and design substance.
</TextDiscription>
<ButtonDisc onClick={handleCentrix}>Explore more</ButtonDisc>
</DetailText>
</DetailBoxTwo>

<DetailBox>

<DetailText>
  <TextCaption>DiaStar Original</TextCaption>
  <TextDiscription>DiaStar Original
Incorporating the bold and ageless appeal of the first DiaStar, the Original bears the features and functions Rado enthusiasts know and the distinctive look they love.
</TextDiscription>
<ButtonDisc onClick={handleCentrix}>Explore more</ButtonDisc>
</DetailText>

<DetailImage as={"img"} src="https://www.rado.com/media/catalog/category/diastar-original.png?im=Resize=(1920,1280),aspect=fill;Crop=(0,0,1920,1280),gravity=Center"/>

</DetailBox>


<BottomBox>
  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_true_thinline_420_0009_3_018_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>True Thinline</TextBottom>
  <TextBottom sx={{color:"grey"}}>The True Thinline could be considered the ultimate Rado timepiece. These stunning quartz watches are Rado’s slimmest and the first to feature the groundbreaking monobloc case.</TextBottom>
<DetailButton onClick={handleCentrix} >Explore collection{">"}</DetailButton>
</DetailBottom>
  </InnerBox>

  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_hyperchrome_312_0259_3_020_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>HyperChrome</TextBottom>
  <TextBottom sx={{color:"grey"}}> The HyperChrome collection is full of ceramic watches, innovations and sleek design, delivering a groundbreaking Rado timepiece. A watch that delivers all the functions with the style you want.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>

</BottomBox>



<BottomBox>
  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_golden_horse_763_3930_4_031_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>HyperChrome Classic</TextBottom>
  <TextBottom sx={{color:"grey"}}>The HyperChrome Classic collection combines the past, present and future of Rado creating stylish women’s and men’s vintage watches. Sleek design, modern materials and breakthrough technology which give a unique look that is distinctively Rado.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>

  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_coupole_763_3860_4_104_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>Coupole</TextBottom>
  <TextBottom sx={{color:"grey"}}> The Coupole Classic takes the design of a traditional wristwatch and adds the distinctive Rado element of sapphire crystal. An elegant timepiece for men or women designed to stand the test of time.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>
  
</BottomBox>



<BottomBox>
  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/c/a/cat_florence_073_3912_4_071_r48912713_soldier_web_1.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}> Florence</TextBottom>
  <TextBottom sx={{color:"grey"}}>The harmonious design of the Rado Florence calls to mind the elegant domes and towers of the city from which the collection takes its name.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>

  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_integral_212_0227_3_071_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>Integral</TextBottom>
  <TextBottom sx={{color:"grey"}}> The iconic Integral has been redesigned to suit the contemporary needs and preferences of today’s wearers, remaining true to the original look and feel.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>
  
</BottomBox>

<BottomBox>
  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/a/n/anatom_r10202209_sld_web.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}> Anatom</TextBottom>
  <TextBottom sx={{color:"grey"}}>The Anatom is an iconic expression of Rado’s brand identity. And now, forty years after its first appearance, the Rado Anatom returns.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>

  <InnerBox>
<ImageBottom as={'img'} src="https://www.rado.com/media/catalog/product/cache/b10a85c06e83a8e1be0692b7a182727c/r/g/rgb_cat_diamasterthinline_766_6068_3_420_3.png"/>
<DetailBottom>
  <TextBottom sx={{fontSize:33}}>DiaMaster</TextBottom>
  <TextBottom sx={{color:"grey"}}> The elegant and subtle side of Rado’s ultra-durable watches, the DiaMaster family draws its inspiration from classic simplicity. Unveiled with a complete redesign, the collection is delightfully diverse.</TextBottom>
<DetailButton onClick={handleCentrix}>Explore collection</DetailButton>
</DetailBottom>
  </InnerBox>
  
</BottomBox>


</OuterContainer>
)
}

export default Collections