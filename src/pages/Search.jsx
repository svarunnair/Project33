import { Box, Button, Grid, Input, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, postResult, postSearch } from "../Redux/data/action";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


const OuterContainer = styled(Box)(({ theme }) => ({

  display:"flex",
  flexDirection:"column",
  // background: "rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  // border: "3px solid red",
  width: "250px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: 200,
  height: 200,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerBox = styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Box)(({ theme }) => ({
  fontSize: 16,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  background: "black",
  color: "white",
  ":hover":{
    background: "black",
    color: "white",

  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const ButtonTheme = styled(Button)(({ theme }) => ({

  // border:"1px solid red",
    justifyContent:"left",
    display:"flex",
    color:"green",
    
    position:"sticky",
    top:0,
    zIndex:1000,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  
  
  const MenuBox = styled(Box)(({ theme }) => ({
    // border:"3px solid green",
    position:"absolute",
    width:"40%",
    background:"white",
    height:600,
    justifyContent:"right",
    right:0,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

const EmblomBox = styled(Box)(({ theme }) => ({
  // border:"3px solid blue",
width:100,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextDetail = styled(Typography)(({ theme }) => ({
  // border:"1px solid blue",
  
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const AllowButton = styled(Button)(({ theme }) => ({
  // border:"1px solid blue",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const FirstBox = styled(Box)(({ theme }) => ({

  display:"flex",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TopBox = styled(Box)(({ theme }) => ({
  // border:"4px solid red",
height:600,
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const IconBox = styled(Box)(({ theme }) => ({
  // border:"1px solid blue",
  display:"flex",
 justifyContent:"end",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Search() {
  const navigate = useNavigate();
  const mainData = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(false);

  const handleProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    console.log("valueee",value)
    let sortData = mainData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setSearch(sortData);
    setSearchValue(value)
  };
  console.log("sortData");

 

  if (search === "") {
    setResult(true);
  }

  console.log("result", result);

  console.log("search", search);
  useEffect(() => {
    dispatch(getData());
  }, []);

  

  console.log("show", show);

  const handleView = () => {
    dispatch(postResult(search));
    navigate(`/result/${searchValue}`);
  };

  const handleTheme=()=>{
    if(show===false){
      setShow(true)
    }
    if(show===true){
      setShow(false)
    }
    
  }
  const handleClose=()=>{
    setShow(false)
  }

  // if(search.length===0){
  //   setShow(false)
  // }
  // if(search.length!==0){
  //   setShow(true)
  // }

  return (
    <OuterContainer>

      <TopBox>
      <Input
        onChange={handleSearch}
        sx={{
          paddingTop: 0,
          width: 600,
          height: 85,
          border: "1px solid black",
        }}
        placeholder="What are you lookig for"
      />

      <InnerBox>
        {search?.slice(0, 5).map((item) => (
          <InnerDiv
            sx={{ cursor: "pointer" }}
            onClick={() => handleProduct(item.id)}
          >
            <ImageBox as={"img"} src={item.images[0]} />
            <TextBox sx={{}}>{item.name}</TextBox>
          </InnerDiv>
        ))}
      </InnerBox>

      {search.length !== 0 && (
        <ButtonBox onClick={handleView}>
          View all {search.length} products
        </ButtonBox>
      )}

      
      </TopBox>

    </OuterContainer>
  );
}

export default Search;
