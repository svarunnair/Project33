import { Box, Typography, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist, getWishlist } from '../Redux/data/action'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
 
 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))

   const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",

 
 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))

   const InnerDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    width:'80%',
    
 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
   const SubDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    width:'20%',
    padding:20,
    display:'flex',
    flexDirection:"column",

 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))

   const WishData = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    display:"flex",
    flexDirection:'column',
    gap:40,   
background:"#F0F0F0",
 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {
      gap:10, 
     },
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))

   const TextBox = styled(Typography)(({ theme }) => ({
    
 
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {
      paddingLeft:0,
     },
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))

   const BoxOne = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    gap:25,
    display:'flex',
    flexDirection:"column",
    background:"#F0F0F0",
    cursor:"pointer",
    textAlign:'left',
    paddingBottom:30,
    

 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ImageBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
width:"100%",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const MapData = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
gap:20,
    display:'grid',
    gridTemplateColumns:"repeat(4,1fr)",
    // background:"#F0F0F0",
    cursor:"pointer",

 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const MapText = styled(Typography)(({ theme }) => ({
    fontSizeL:10,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const CloseDiv = styled(Box)(({ theme }) => ({
     display:"flex",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

function Wishlist() {
    const wishlist=useSelector((store)=>store.data.getWishlistData)
    const dispatch=useDispatch()
    const naviagate=useNavigate()

    console.log("wishhhhhhh",wishlist)


    const handleRemove=(id)=>{
        dispatch(deleteWishlist(id))
    }

    const handleAccount=()=>{
      naviagate('/account')
    }

    useEffect(()=>{
     dispatch(getWishlist())
    },[])
  return (
    <OuterContainer>

        <InnerContainer>
           
            <SubDiv>
                <BoxOne>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},paddingTop:2,}}>Account</TextBox>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},}}>My wishlist</TextBox>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},}}>My collections</TextBox>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},}}>Account info</TextBox>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},}}>Address Book</TextBox>
                <TextBox onClick={handleAccount} sx={{paddingLeft:5,":hover":{textDecoration:"underline"},}}>Signout</TextBox>
                </BoxOne>
            </SubDiv>
            <InnerDiv>

                <TextBox sx={{fontSize:40,display:"flex",padding:3,}}>My Wish List</TextBox>

                <TextBox sx={{display:"flex",color:"grey",fontSize:12,paddingBottom:5,}}>{wishlist.length} items</TextBox>

                <MapData>

                    {wishlist.map((item)=>(
                        <WishData>

                            <ImageBox as={"img"} src={item.images[0]}/>
                            <MapText>{item.name}</MapText>
                            <MapText sx={{fontWeight:700}}>₹{item.price}.00</MapText>
                            <CloseDiv>
                            <CloseIcon onClick={()=>handleRemove(item.id)}/>
                            <MapText>Remove item</MapText>
                            </CloseDiv>
                        </WishData>
                      
                    ))}

                   

                    


                </MapData>


            </InnerDiv>
        </InnerContainer>


    </OuterContainer>
  )
}

export default Wishlist