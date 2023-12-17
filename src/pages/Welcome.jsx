import { Box, Typography, styled } from "@mui/material";
import React from "react";

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
  background: "black",
  justifyItems: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ThirdBox = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  width: "100%",
  background: "black",
  height: 600,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
   fontSize:'20px',
  [theme.breakpoints.down("xl")]: {
    fontSize:'18px',
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize:'16px',
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  width: "100%",
  height: 400,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  // border:"2px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
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
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SubContainer = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  width: "50%",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Welcome() {
  return (
    <Main>
      <InnerDiv>
        <FirstBox>
          <ImageBox
            as={"img"}
            src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill"
          />
          <TextBox
            sx={{ position: "absolute", bottom: 300, left: 200, fontSize: 33 }}
          >
            {" "}
            CENTRIX AUTOMATIC DIAMONDS
          </TextBox>
          <ButtonBox
            sx={{
              position: "absolute",
              bottom: 200,
              left: 200,
              color: "white",
            }}
          >
            Dicover more
          </ButtonBox>
        </FirstBox>

        <SecondBox>
          <SubBox>
            <TextBox sx={{ color: "white" }}>
              Explore our latest creations
            </TextBox>
            <TextBox sx={{ color: "white" }}>
              Rado is known as the Master of Materials: from high-tech ceramic
              to sapphire crystal and diamonds to stainless steel, our
              innovative watches have no boundaries when it comes to design.
              Feel and discover the Rado difference!
            </TextBox>
          </SubBox>
        </SecondBox>

        <ThirdBox>
          <SliderBox>
            <ImageBox
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/PDP_Images/Carousel_5000x3756_2.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageBox
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/true-square-skeleton-all-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageBox
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/new-centrix-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
            <ImageBox
              sx={{ width: 500, height: 400 }}
              as={"img"}
              src="https://www.rado.com/media/sgecom_contentsystem/homepage/view-all-collections.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"
            />
          </SliderBox>
        </ThirdBox>

        <FourthBox>
          <SubContainer>
            <TextBox>5-year International Warranty</TextBox>
            <TextBox>As of 1st November 2023, all new Rado watches benefit from a 5-year International Warranty.
</TextBox>
            <TextBox>At Rado we have always made watches that are built to last – not just for a few years, but for a lifetime. We take care to use materials that are proven to resist wear and tear. High-tech ceramic cases and bracelets, Ceramos™, sapphire crystal, stainless steel and titanium all serve to enclose and protect the sophisticated Swiss movements that power our watches. We take great pride in the high quality, reliability and performance of our products, and are pleased to offer our customers additional support in the care and handling of their watches.</TextBox>
          </SubContainer>
          <SubContainer>

            <ImageBox  as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-extension-homepage-block.jpg?im=Resize=(800,657),aspect=fill;Crop=(0,0,800,657),gravity=Center"/>
          </SubContainer>
        </FourthBox>
      </InnerDiv>
    </Main>
  );
}

export default Welcome;
