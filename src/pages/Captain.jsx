import { Box, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/data/action";
import { useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import ControlledCheckbox from "../components/CheckBox";
import TemporaryDrawer from "../components/Drawer";

const OuterContainer = styled(Box)(({ theme }) => ({
  position:"relative",
  display:"flex",
  flexDirection:"column",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  background: "#141414",
  display: "grid",
  justifyItems: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TitleImage = styled(Box)(({ theme }) => ({
  width: "40%",
  paddingTop: 10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "60%",
  paddingTop: 20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const MenuBar = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  height: 50,
  position: "sticky",
  top: 108,
  background: "white",
  display: "flex",
 
  justifyContent: "end",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataBox = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",
  background: "#F0F0F0",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  border: "2px solid white",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  width: "75%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapText = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SideBar = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  position:"absolute",
  background:"white",
 justifyContent:"end",
 left:'80%',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TextFilter = styled(Typography)(({ theme }) => ({
   padding:50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailText = styled(Typography)(({ theme }) => ({
textAlign:"left",
padding:10,

 [theme.breakpoints.down("xl")]: {},
 [theme.breakpoints.down("lg")]: {},
 [theme.breakpoints.down("md")]: {},
 [theme.breakpoints.down("sm")]: {},
 [theme.breakpoints.down("xs")]: {},
}));

const TextBox1 = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  cursor: "pointer",
  display: "flex",
  color: "black",
  justifyContent: "end",
  textAlign: "rigth",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SubMenu = styled(Box)(({ theme }) => ({
  border:"2px solid red",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextMenu = styled(Typography)(({ theme }) => ({
  textAlign:"left",
  color:"grey",
  fontSize:14,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BottomDiv = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Captain() {
  const maindata = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [page,setPage]=useState(1)
  const itemPerPage=9


  const handleChange=(event,newPage)=>{
           setPage(newPage)
  }

const getDataForPage=()=>{
  const startIndex=(page-1)*itemPerPage
  const endIndex=startIndex+itemPerPage
  const sliceData=maindata.slice(startIndex,endIndex)
  return sliceData
}

const paginationData=getDataForPage()


  console.log("maindata", maindata);

  const handleMore = () => {
    if (show === false) {
      setShow(true);
    }
    if (show === true) {
      setShow(false);
    }
  };
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <OuterContainer>
      <InnerContainer>
        <TitleImage
          as={"img"}
          src="https://www.rado.com/media/catalog/category/Captain_Cook_9.png"
        />
        <TextBox>
          {" "}
          Charting new territory in vintage watches, the Rado Captain Cook is a
          natural choice for modern explorers. Its vintage details, and
          up-to-date features make it the perfect watch for men and women.
        </TextBox>
        <TextBox
          sx={{ ":hover": { textDecoration: "underline" }, paddingBottom: 17 }}
        >
          Read more about the collection{">"}
        </TextBox>
      </InnerContainer>
      <MenuBar>
        <TextBox1 onClick={handleMore}><TemporaryDrawer/></TextBox1>
      </MenuBar>

      <DataBox>
 

        {paginationData.map((item) => (
          <InnerDiv>
            <ImageBox
              sx={{ cursor: "pointer" }}
              as={"img"}
              src={item.images[0]}
            />
            <MapText sx={{ fontSize: 18, cursor: "pointer" }}>
              {item.name}
            </MapText>
            <MapText
              sx={{
                color: "grey",
                cursor: "pointer",
                fontSize: 12,
                paddingTop: 2,
              }}
            >
              {item.model}
            </MapText>
            <MapText sx={{ color: "grey", cursor: "pointer", fontSize: 12 }}>
              {item.size}
            </MapText>
            <MapText
              sx={{ paddingTop: 1, paddingBottom: 5, cursor: "pointer" }}
            >
              ₹{item.price}.00
            </MapText>
          </InnerDiv>
        ))}
      </DataBox>
      <BottomDiv>
      <Pagination count={Math.ceil(maindata.length/itemPerPage)} page={page} onChange={handleChange}/>
      </BottomDiv>
    </OuterContainer>
  );
}

export default Captain;
