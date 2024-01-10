import { Store } from '@mui/icons-material'
import { Box, Pagination, PaginationItem, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OuterContainer = styled(Box)(({ theme }) => ({
  // border:'2px solid red',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerContainer = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
  background:"#141414",
  display:"grid",
  justifyItems:'center',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TitleBox = styled(Box)(({ theme }) => ({
  // border:'2px solid yellow',
  width:"50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailBox = styled(Typography)(({ theme }) => ({
  // border:'2px solid yellow',
  color:"white",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FirstBox = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
  background:"#F0F0F0",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const MapData = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerDiv = styled(Box)(({ theme }) => ({
  border:'1px solid white',

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextDetail = styled(Typography)(({ theme }) => ({

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImageMap = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
  width:"70%",
  paddingTop:10,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BottomBox = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
 display:"flex",
 justifyContent:"center",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function Centrix() {
  const mainData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  console.log("mainData",mainData)

  const handleProduct=(id)=>{
    navigate(`/detail/${id}`)
  }

  useEffect(()=>{
    dispatch(getData())
  },[])

  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // You can adjust this based on your preference

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const getDataForPage = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = mainData.slice(startIndex, endIndex);
    return slicedData;
  };

  const paginatedData = getDataForPage();


  console.log("pagg",paginatedData)
  return (
    <OuterContainer>
      <InnerContainer>
        <TitleBox sx={{paddingTop:6}} as={"img"} src="https://www.rado.com/media/catalog/category/Centrix_9.png"/>
        <DetailBox sx={{width:"60%",paddingTop:5,fontSize:20}}>There is a reason why Centrix is Rado’s most popular watch. Its versatility in a range of different sizes, colour combinations, quartz and automatic movements guarantees there is a model to suit all tastes.</DetailBox>
      <DetailBox sx={{":hover":{textDecoration:"underline"},paddingTop:4,paddingBottom:7}}>Read more about the collection{">"}</DetailBox>
      </InnerContainer>

<FirstBox>

<MapData>
  {paginatedData?.map((item)=>(
    <InnerDiv >
    <ImageMap sx={{cursor:"pointer"}} onClick={()=>handleProduct(item.id)} as={"img"} src={item.images[0]}/>
    <TextDetail onClick={()=>handleProduct(item.id)}>{item.name}</TextDetail>
    <TextDetail sx={{cursor:"pointer",color:"grey",fontSize:12,cursor:"pointer"}}>{item.model}</TextDetail>
    <TextDetail sx={{cursor:"pointer",color:"grey",fontSize:12,cursor:"pointer"}}>{item.size}</TextDetail>
    <TextDetail sx={{cursor:"pointer"}} onClick={()=>handleProduct(item.id)}>₹{item.price}.00</TextDetail>
    </InnerDiv>
  ))}
</MapData>
<BottomBox>
<Pagination count={Math.ceil(mainData.length / itemsPerPage)} page={page} onChange={handleChange} />
</BottomBox>
</FirstBox>



    </OuterContainer>
  )
}

export default Centrix