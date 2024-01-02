import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDetail, postInfo } from '../Redux/data/action';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const OuterContainer = styled(Box)(({ theme }) => ({
  display:"grid",
  justifyItems:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({

  // border:"2px solid red",
  display:'flex',
  width:"100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({

  // border:'2px solid green',
  width:"75%",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"70%",
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextDetail = styled(Typography)(({ theme }) => ({

 


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailBox = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  width:"50%",
  padding:30,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
    padding:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageDiv = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  width:"50%",
  padding:30,
  display:"flex",
  justifyItems:'center',
  justifyContent:"center",
  background:"#F5F5F5	",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
    padding:0,

  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailDiv = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  width:'70%',
  textAlign:"left",
  paddingLeft:100,
  paddingTop:100,
 
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


const BottomBox = styled(Typography)(({ theme }) => ({

  // border:"2px solid green",
  width:"70%",
  display:'flex',
  justifyContent:"center",
  paddingLeft:40,
  paddingTop:60,
  fontSize:25,
  textAlign:'center',
  paddingBottom:70,

  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingLeft:0,
  paddingTop:20,
  paddingBottom:0,
  width:"80%",
  fontSize:12,
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconDiv = styled(Box)(({ theme }) => ({
  cursor:'pointer',
  // border:"2px solid red",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingRight:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SpecificationBox = styled(Box)(({ theme }) => ({

  // border:"2px solid red",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerBox = styled(Box)(({ theme }) => ({

  // border:"2px solid red",
  display:"flex",
  padding:10,
  gap:50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    padding:0,
    display:"flex",
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const GeneralBox = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DialBox = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const MovementBox = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const CaseBox = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BraceletBox = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextBox = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  textAlign:"left",
  color:"grey",
  paddingTop:15,
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Wrapper = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  display:"flex",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextWrap = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
function Detail() {

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
<InnerDiv>
<ImageDiv>
 

 <Wrapper>
  <IconDiv onClick={handlePrev}>
  <ArrowBackIcon sx={{paddingTop:22,}}/>
  </IconDiv>
  <ImageBox  as={"img"} src={dataImage[count]}/>
  <FavoriteOutlinedIcon sx={{":hover":{color:"red"}}}/>
  <IconDiv onClick={handleNext}>
  <ArrowForwardIcon sx={{paddingTop:22}}/>
  </IconDiv>
 
  </Wrapper>

  </ImageDiv>

  <DetailBox>
    <DetailDiv>
    <TextDetail sx={{fontSize:40}}>{detail.name}</TextDetail>
    <TextDetail sx={{color:"grey"}}>{detail.model}</TextDetail>
    <TextDetail sx={{color:"grey"}} >{detail.size}</TextDetail>
   <TextDetail sx={{paddingTop:1,cursor:"pointer"}} >View full details{">"}  Add to compare {">"} Open comparetor {"?"}</TextDetail>
    <TextDetail sx={{fontSize:30,paddingTop:8}}>₹{detail.price}.00</TextDetail>
    <TextDetail sx={{color:"grey",fontWeight:700}} >Maximum retail price (gst incl.). This maximum retail price is applicable for imports in India effect from 1st February 2023. Retailers may have stock at different MRP based on their date of purchase.</TextDetail>
    </DetailDiv>
  </DetailBox>



</InnerDiv>

<BottomBox>{detail.description}</BottomBox>

<SpecificationBox>
  <TextWrap >
<TextBox sx={{fontSize:22,color:"grey",paddingLeft:13,}}>__________________________________________________________Specification__________________________________________________________</TextBox>
</TextWrap>
<InnerBox>
  <GeneralBox>
    <TextBox sx={{color:'black'}}>General</TextBox>
    <TextBox>Engravable:{detail.Engravable}</TextBox>
    <TextBox>Product Name:{detail.ProductName}</TextBox>
    <TextBox>SKU:{detail.SKU}</TextBox>
    <TextBox>Gender:{detail.Gender}</TextBox>
  </GeneralBox>
  <MovementBox>
  <TextBox sx={{color:'black'}}>Movement</TextBox>
  <TextBox>Movement Type:{detail.MovementType}</TextBox>
    <TextBox>Movement Power Reserve:{detail.MovementReference}</TextBox>
    <TextBox>Movement Reference:{detail.MovementReference}</TextBox>
   
  </MovementBox>
  <CaseBox>
  <TextBox sx={{color:'black'}}>Case</TextBox>
  <TextBox>Case Materials:{detail.CaseMaterials}</TextBox>
    <TextBox>Case Thickness:{detail.CaseThickness}</TextBox>
    <TextBox>Case Water Resistance:{detail.CaseWaterResistance}</TextBox>
    <TextBox>Case Dimension:{detail.CaseDimension}</TextBox>
  </CaseBox>
  <DialBox>
  <TextBox sx={{color:'black'}}>Dial</TextBox>
  <TextBox>Dial Colour:{detail.DialColour}</TextBox>
    <TextBox>Dial Has Date:{detail.DialHasDate}</TextBox>
    <TextBox>Dial Has Jewels:{detail.DialHasJewels}</TextBox>
    <TextBox>Mother Of Pearl:{detail.MotherOfPearl}</TextBox>
  </DialBox>
  <BraceletBox>
  <TextBox sx={{color:'black'}}>Bracelet</TextBox>
  <TextBox>Bracelet Materials:{detail.CaseMaterials}</TextBox>
    
  </BraceletBox>


</InnerBox>

</SpecificationBox>



    </OuterContainer>
  )
}

export default Detail