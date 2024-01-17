import { Box, Typography, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSignup } from '../Redux/auth/authAction'
import { useNavigate } from 'react-router-dom'


const OuterContainer = styled(Box)(({ theme }) => ({
  //  border:"2px solid red",
  

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const InnerContainer = styled(Box)(({ theme }) => ({
    //  border:"2px solid red",
    
  
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }))

    const TitleText = styled(Typography)(({ theme }) => ({
      // border:"2px solid red",
      fontSize:30,
      padding:30,
     
   
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {},
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const BoxDiv = styled(Box)(({ theme }) => ({
      // border:"2px solid red",
     display:'flex',
     justifyContent:"center",
     paddingBottom:200,
     
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {
        flexDirection:'column',
        
       },
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const FirstBox = styled(Box)(({ theme }) => ({
      // border:"2px solid green",
     width:300,
     height:300,
     display:"grid",
     justifyItems:"center",
     paddingBottom:200,
     gap:20,
   
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {
        paddingBottom:20,
        gap:0,
       },
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const InnerBox = styled(Box)(({ theme }) => ({
      // border:"2px solid blue",
    cursor:'pointer',
      width:100,
      height:100,
      display:"flex",
      textAlign:"center",
      justifyContent:"center",
      
    
     
   
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {
        width:250,
        height:200,
       },
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const InnerBoxOne = styled(Box)(({ theme }) => ({
      // border:"2px solid blue",
      width:250,
      height:250,
     display:"flex",
     textAlign:"center",
     justifyContent:"center",
   
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {},
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const ImageBox = styled(Box)(({ theme }) => ({
      // background:"black",
      width:"100%",
      height:"100%",
      cursor:"pointer",
      
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {},
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

     const TextBox = styled(Typography)(({ theme }) => ({

     fontSize:30,
    position:"absolute",    
    fontWeight:500,
    color:"white", 
      
       [theme.breakpoints.down("xl")]: {},
       [theme.breakpoints.down("lg")]: {},
       [theme.breakpoints.down("md")]: {},
       [theme.breakpoints.down("sm")]: {},
       [theme.breakpoints.down("xs")]: {},
     }))

function Account() {

  const account=useSelector((store)=>store.auth.getSignupData)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  

  let userName=account.map((item)=>{return item.firstName})

  console.log("userrr",userName)

  console.log("acc",account)

  const handleSignout=()=>{
    localStorage.clear()
    navigate('/')
  }

  const handleWish=()=>{
    navigate('/wishlist')
  }

  useEffect(()=>{
      dispatch(getSignup())
  },[])

  return (
    <OuterContainer>


      <InnerContainer>
        <TitleText>Hello {userName} </TitleText>

        <BoxDiv>

          <FirstBox>
            <InnerBox sx={{ width:250,
      height:250,}}>
              <TextBox>Register my watch</TextBox>
              <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/extend-my-warranty.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
            </InnerBox>
            <InnerBox onClick={handleWish} sx={{width:250,height:100}}>
            <TextBox>My Wish List</TextBox>
            <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/my-wish-list.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
            </InnerBox>
          </FirstBox>
          <FirstBox>
            <InnerBox sx={{width:250,height:150}}>
            <TextBox>My Collection</TextBox>
            <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/collection.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
            </InnerBox>
            <InnerBox sx={{width:200,height:200}}>
            <TextBox>Newsletter</TextBox>
            <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/newsletter.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
            </InnerBox>
          </FirstBox>
          <FirstBox>
          <InnerBox sx={{width:230,height:100}}>
          <TextBox>Personal </TextBox><br/>
          <TextBox sx={{paddingTop:3}}>Information</TextBox>
          <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/personal-information.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
          </InnerBox>
            <InnerBox sx={{width:250,height:250}}>
            <TextBox >Sign Out</TextBox>
            <ImageBox onClick={handleSignout} as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/sign-out.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
            </InnerBox>
          </FirstBox>
          <FirstBox>
          <InnerBox sx={{width:250,height:150}}>
          <TextBox>Address Book</TextBox>
          <ImageBox as={"img"} src="https://www.rado.com/static/version1704871359/frontend/Rado/default/en_GB/SgEcom_Customer/images/menu/address-book.jpg?im=Resize=(932,1150),aspect=fill;Crop=(0,0,932,1150),gravity=Center"/>
          </InnerBox>
            
          </FirstBox>


        </BoxDiv>

      </InnerContainer>

    </OuterContainer>
  )
}

export default Account