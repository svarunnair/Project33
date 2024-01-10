import { Box, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/data/action";
import FavoriteIcon from '@mui/icons-material/Favorite';

const OuterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  // border:"1px solid blue",
  background: "#141414",
  display: "grid",
  justifyItems: "center",
  paddingBottom: 60,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingBottom: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextDetails = styled(Typography)(({ theme }) => ({
  // border:"1px solid green",
  color:"white",
  fontSize: 20,
  width: "70%",
  paddingTop: 60,
  paddingBottom: 60,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border:"1px solid yellow",
  width: "50%",
  paddingTop: 60,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextHover = styled(Typography)(({ theme }) => ({
  ":hover": { textDecoration: "underline" },
  cursor: "pointer",
  color:"white",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageMap = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  width: "100%",
  cursor: "pointer",
  // border:"2px solid red",
  paddingTop:20,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapData = styled(Box)(({ theme }) => ({
  // border:"1px solid black",
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
padding:10,
background:"#F0F0F0",
display:"grid",
 justifyItems:"center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDivOne = styled(Box)(({ theme }) => ({
  // border: "2px solid black",
 width:"80%",
 height:'90%',
 display:"grid",
 padding:50,
 justifyItems:"center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FavoriteIconDiv = styled(Box)(({ theme }) => ({
  // border: "2px solid black",
  width:"100%",
  display:"flex",
  justifyContent:"end",
  
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TextMap = styled(Typography)(({ theme }) => ({
 
  color:"black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BottomBox = styled(Box)(({ theme }) => ({
 
  display:"flex",
  justifyContent:"center",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Square() {
  const mainData = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [page,setPage]=useState(1)


  const itemsPerPage=9;


  const getDataPage=()=>{
    const startIndex=(page-1)*itemsPerPage
    const endIndex=startIndex+itemsPerPage
    const sliceData=mainData.slice(startIndex,endIndex)
    return sliceData
  }

  const paginationData=getDataPage()

  const handleChange=(e,newPage)=>{
    setPage(newPage)
  }

  useEffect(() => {
    setData(mainData);
  }, [mainData]);


  console.log("squareData", mainData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <ImageBox
          as={"img"}
          src="https://www.rado.com/media/catalog/category/True_Square_9.png"
        />
        <TextDetails>
          At Rado, we don’t just know square high-tech ceramic watches: We
          invented them! The True Square features a full high-tech ceramic case
          and bracelet, meeting every Rado requirement.
        </TextDetails>
        <TextHover>Read more about the collection {">"}</TextHover>
      </InnerContainer>

      <MapData>
        {paginationData.map((item) => (
          <InnerDiv>
          <InnerDivOne>
            <FavoriteIconDiv>
            <FavoriteIcon sx={{color:'black',justifyItems:'end',":hover":{color:"red"},}}/>
            </FavoriteIconDiv>
            <ImageMap onClick={()=>handleProduct(item.id)} as={"img"} src={item.images[0]} />    
            <TextMap sx={{fontSize:20}}>{item.name}</TextMap>
            <TextMap sx={{color:"grey"}}>{item.model}</TextMap>
            <TextMap sx={{color:"grey"}}>{item.size}</TextMap>
            <TextMap sx={{fontSize:20}}>₹{item.price}.00</TextMap>
            </InnerDivOne>
          </InnerDiv>
        ))}
      </MapData>

      <BottomBox>
      <Pagination count={Math.ceil(mainData.length/itemsPerPage)} page={page} onChange={handleChange} />
      </BottomBox>
    </OuterContainer>
  );
}

export default Square;
