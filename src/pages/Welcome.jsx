import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/data/action";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Main = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  width: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",
  width: "100%",
  background: "black",
  height: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondBox = styled(Box)(({ theme }) => ({
  // border:"5px solid pink",
  width: "100%",
  justifyContent: "center",
  display: "flex",
  background: "black",
  justifyItems: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    height: 190,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ThirdBox = styled(Box)(({ theme }) => ({
  border: "2px solid blue",
  width: "100%",
  background: "black",
  height: 600,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    height: 340,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  position: "absolute",
  bottom: 300,
  left: 100,
  color: "white",
  fontWeight: 900,

  [theme.breakpoints.down("xl")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    bottom: 600,
    fontWeight: 900,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  width: "100%",
  height: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    height: 400,
    resizeMode: "stretch",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SubBox = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  width: "100%",
  width: 700,
  height: 150,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: 300,
    height: 50,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  border: "2px solid yellow",
  position: "absolute",
  bottom: 200,
  left: 200,
  color: "white",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    bottom: 550,
    left: 200,
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SliderBox = styled(Box)(({ theme }) => ({
  // border:"2px solid yellow",
  display: "flex",
  maxWidth: 1500,
  overflow: "auto",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    maxWidth: 1100,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FourthBox = styled(Box)(({ theme }) => ({
  border: "2px solid yellow",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SubContainer = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  width: "50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Box)(({ theme }) => ({
  border: "2px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageSlide = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "80%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerBox = styled(Box)(({ theme }) => ({
  display: "flex",

  maxWidth: "100%",
  overflow: "auto",
  height: 300,

  border: "4px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FivethBox = styled(Box)(({ theme }) => ({
  width: "100%",
  background: "#F0F0F0",
  height: 350,
  border: "2px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageShow = styled(Box)(({ theme }) => ({
  width: 150,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FivethText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextMap = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SixthBox = styled(Box)(({ theme }) => ({
  border: "2px solid blue",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxOne = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "33%",
  height: 280,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxTwo = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "33%",
  height:280,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxThree = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "33%",
  height: 280,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SeventhBox = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "100%",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxFour = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "50%",
  height: 400,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxFive = styled(Box)(({ theme }) => ({
  border: "2px solid black",
  width: "50%",
  height: 400,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const EighthBox = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width: "100%",

  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Detailtext = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageDetail = styled(Box)(({ theme }) => ({
 
  width: "50%",
  height: 500,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const NinethBox = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width: "100%",
  height: 500,
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxSix = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width: "50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxSeven = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width: "50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextImage = styled(Typography)(({ theme }) => ({
  border: "2px solid red",
  position:"absolute",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const ButtonImage = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  position:"absolute",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const ImageIcon = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width:"100%",
  height:"100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextAllign = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width:"50%",
background:"#F5F5F5",
textAllign:"left",
  
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Welcome() {
  const mainData = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleCentrix=()=>{
    navigate('/centrix')
  }
 const handleCollection=()=>{
  navigate('/collections')
 }
const handleCook=()=>{
  navigate(`/detail/${1}`)
}
  const handleSquare=()=>{
    navigate('/square')
  }
  console.log("mainData", mainData);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Main>
      <InnerDiv>
        <FirstBox>
          <ImageBox
            as={"img"}
            src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill"
          />
          <TextBox>CENTRIX AUTOMATIC DIAMONDS</TextBox>
          <ButtonBox>Dicover more</ButtonBox>
        </FirstBox>

        <SecondBox>
          <SubBox>
            <SecondText sx={{ color: "white" }}>
              Explore our latest creations
            </SecondText>
            <SecondText sx={{ color: "white" }}>
              Rado is known as the Master of Materials: from high-tech ceramic
              to sapphire crystal and diamonds to stainless steel, our
              innovative watches have no boundaries when it comes to design.
              Feel and discover the Rado difference!
            </SecondText>
          </SubBox>
        </SecondBox>

        <ThirdBox>
          <SliderBox sx={{cursor:"pointer"}}>
            <ImageSlide onClick={handleCook}
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/PDP_Images/Carousel_5000x3756_2.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageSlide onClick={handleSquare}
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/true-square-skeleton-all-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageSlide onClick={handleCentrix}
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/new-centrix-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageSlide onClick={handleCollection}
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/view-all-collections.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
          </SliderBox>
        </ThirdBox>

        <FourthBox>
          <SubContainer>
            <TextData>5-year International Warranty</TextData>
            <TextData>
              As of 1st November 2023, all new Rado watches benefit from a
              5-year International Warranty.
            </TextData>
            <TextData>
              At Rado we have always made watches that are built to last – not
              just for a few years, but for a lifetime. We take care to use
              materials that are proven to resist wear and tear. High-tech
              ceramic cases and bracelets, Ceramos™, sapphire crystal, stainless
              steel and titanium all serve to enclose and protect the
              sophisticated Swiss movements that power our watches. We take
              great pride in the high quality, reliability and performance of
              our products, and are pleased to offer our customers additional
              support in the care and handling of their watches.
            </TextData>
          </SubContainer>
          <SubContainer>
            <ImageBox
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-extension-homepage-block.jpg?im=Resize=(800,657),aspect=fill;Crop=(0,0,800,657),gravity=Center"
            />
          </SubContainer>
        </FourthBox>

        <FivethBox>
          <FivethText>Our gift ideas for you</FivethText>
          <InnerBox>
            {mainData?.map((item) => (
              <MapBox>
                <ImageShow as={"img"} src={item.images[0]} />
                <TextMap>{item.name}</TextMap>
              </MapBox>
            ))}
          </InnerBox>
        </FivethBox>

        <SixthBox>
          <BoxOne>
            <ImageIcon as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/captain-cook-chronograph_1.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
          <TextImage>Chronography watches</TextImage>
          <ButtonImage>Discover more</ButtonImage>

          </BoxOne>
          <BoxTwo>
          <ImageIcon as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/skeleton-watches.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
          <TextImage>Chronography watches</TextImage>
          <ButtonImage>Discover more</ButtonImage>

          </BoxTwo>
          <BoxThree>
          <ImageIcon as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/captain-cook-over-pole.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
          <TextImage>Chronography watches</TextImage>
          <ButtonImage>Discover more</ButtonImage>

          </BoxThree>
        </SixthBox>

        <SeventhBox>
          <BoxFour>
          <ImageIcon as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Campaigns/2023/Christmas/men-watches-christmas.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
          <TextImage>Chronography watches</TextImage>
          <ButtonImage>Discover more</ButtonImage>

          </BoxFour>
          <BoxFive>
          <ImageIcon as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Campaigns/2023/Christmas/women-watches-christmas.jpg?im=Resize=(2000,1400),aspect=fill;Crop=(0,0,2000,1400),gravity=Center"/>
          <TextImage>Chronography watches</TextImage>
          <ButtonImage>Discover more</ButtonImage>

          </BoxFive>
        </SeventhBox>

        <EighthBox>
          <TextAllign>
        <Detailtext>Master of materials</Detailtext>
        <Detailtext>The unconventional beauty of ceramic</Detailtext>
        <Detailtext>Hypoallergenic comfort, lightness and the very special sensation of ceramic against your skin – unmistakable, sensual and unique with Rado high-tech ceramic.</Detailtext>
        </TextAllign>
          <ImageDetail
            as={"img"}
            src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage-master-of-materials-image-card.jpg?im=Resize=(1300,1068),aspect=fill;Crop=(0,0,1300,1068),gravity=Center"
          />
        </EighthBox>

        <NinethBox>
          <BoxSix></BoxSix>

          <BoxSeven></BoxSeven>
        </NinethBox>
      </InnerDiv>

      
    </Main>
  );
}

export default Welcome;
