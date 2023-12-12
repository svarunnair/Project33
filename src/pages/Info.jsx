import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Menu, MenuItem, Select, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInfo, getInfo, postBooking } from '../Redux/data/action'
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';


const OuterContainer=styled(Box)(({theme})=>({
    
     [theme.breakpoints.down("xl")]:{
  
     },
     [theme.breakpoints.down("lg")]:{
  
     },
     [theme.breakpoints.down("md")]:{
         
     },
     [theme.breakpoints.down("sm")]:{
         
     },
     [theme.breakpoints.down("xs")]:{
         
     }
  }))

  const TextBox=styled(Typography)(({theme})=>({
    
    [theme.breakpoints.down("xl")]:{
 
    },
    [theme.breakpoints.down("lg")]:{
 
    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
 }))

 const InnerBox=styled(Box)(({theme})=>({
    
    [theme.breakpoints.down("xl")]:{
 
    },
    [theme.breakpoints.down("lg")]:{
 
    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
 }))

 const ImageBox=styled(Box)(({theme})=>({
    
  [theme.breakpoints.down("xl")]:{

  },
  [theme.breakpoints.down("lg")]:{

  },
  [theme.breakpoints.down("md")]:{
      
  },
  [theme.breakpoints.down("sm")]:{
      
  },
  [theme.breakpoints.down("xs")]:{
      
  }
}))


const FirstBox=styled(Box)(({theme})=>({
    
  [theme.breakpoints.down("xl")]:{

  },
  [theme.breakpoints.down("lg")]:{

  },
  [theme.breakpoints.down("md")]:{
      
  },
  [theme.breakpoints.down("sm")]:{
      
  },
  [theme.breakpoints.down("xs")]:{
      
  }
}))

const SecondBox=styled(Box)(({theme})=>({
    
  [theme.breakpoints.down("xl")]:{

  },
  [theme.breakpoints.down("lg")]:{

  },
  [theme.breakpoints.down("md")]:{
      
  },
  [theme.breakpoints.down("sm")]:{
      
  },
  [theme.breakpoints.down("xs")]:{
      
  }
}))

const ButtonBox=styled(Button)(({theme})=>({
    
  [theme.breakpoints.down("xl")]:{

  },
  [theme.breakpoints.down("lg")]:{

  },
  [theme.breakpoints.down("md")]:{
      
  },
  [theme.breakpoints.down("sm")]:{
      
  },
  [theme.breakpoints.down("xs")]:{
      
  }
}))

function Info() {

    const [name,setName] =useState('')
    const infoData=useSelector((store)=>store.data.getInfo)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [postcode,setPostcode]=useState('')
    const [telephone,setTelephone]=useState('')
    const [city,setCity]=useState('')


    const handleFirst=(e)=>{
      let value=e.target.value 
      setFirst(value)
    }
    const handleLast=(e)=>{
      let value=e.target.value 
      setLast(value)
    }
    const handleEmail=(e)=>{
      let value=e.target.value 
      setEmail(value)
    }
    const handleAddress=(e)=>{
      let value=e.target.value 
      setAddress(value)
    }
    const handlePostcode=(e)=>{
      let value=e.target.value 
      setPostcode(value)
    }
    const handleTelephone=(e)=>{
      let value=e.target.value 
      setTelephone(value)
    }
    const handleCity=(e)=>{
      let value=e.target.value 
      setCity(value)
    }

    const handleReserve=()=>{
      
      if(first!==""&&email!==""&&telephone!=="",city!==""){
        let data={
          Salutation:name,
          FirstName:first,
          LastName:last,
          Email:email,
          Address:address,
          Telephone:telephone,
          PostCode:postcode,
          City:city,
          ProductName:infoData.map((item)=>{return item.name}),
          ProductPrice:infoData.map((item)=>{return item.price})
        }
        let dataId=infoData.map((item)=>{return item.id})
        dispatch(postBooking(data))
        navigate(`/detail/${dataId}`)
        alert('thank you')
      }
      if(first===""&&email===""&&telephone==="",city===""){
        alert('please fill the data')
      }
      
    }

    

    console.log("inFo",infoData)

    const handleClose=()=>{
      let dataId=infoData.map((item)=>{return item.id})
      dispatch(deleteInfo(dataId))
      navigate(`/detail/${dataId}`)
      
    }

    useEffect(()=>{
      dispatch(getInfo())
    },[])

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <OuterContainer >

<InnerBox  onClick={handleClose} sx={{marginLeft:130,marginTop:7 , cursor:'pointer'}}><ClearIcon/></InnerBox>
<FirstBox sx={{maxHeight:600,width:1200, overflow:"auto",marginTop:4}}>
  
 

        <TextBox sx={{fontSize:40}}> Please enter your contact details</TextBox>
        <TextBox sx={{width:530, textAlign:"left",marginLeft:34, marginTop:10,fontSize:18}}>Complete your details and one of our associates will contact you about viewing your selected time piece. No prepayment is required for the reservation and there is no obligation to purchase the reserved watch.</TextBox>





<InnerBox sx={{padding:10, gap:10, textAlign:'left',marginLeft:23 }} >

      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 ,textAlign:"left",border:"1px solid black" }}>
        <InputLabel  id="demo-simple-select-standard-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={name}
          onChange={handleChange}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Mr.</MenuItem>
          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
         
        </Select>
      </FormControl><br/>
   <Input onChange={handleFirst} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2}} placeholder='First Name'/><br/>
   <Input onChange={handleLast} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2}} placeholder='Last Name'/><br/>
   <Input onChange={handleEmail} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2}} placeholder='Email'/>
   <Input onChange={handleTelephone} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2,marginLeft:3}} placeholder='Telephone'/><br/>
   <Input onChange={handleAddress} sx={{width:600,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2}} placeholder='Address'/><br/>
   <Input onChange={handlePostcode} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2}} placeholder='Postcode'/>
   <Input onChange={handleCity} sx={{width:300,height:50,border:"1px solid black",padding:"4px",marginTop:3,borderRadius:2,marginLeft:3}} placeholder='City'/><br/>
</InnerBox>

<InnerBox sx={{width:200,marginLeft:120,marginTop:-90,}} >
  {infoData.map((item)=>(
    <InnerBox >
    <ImageBox  as={"img"} sx={{width:120,}} src={item.images[0]}/>
    <TextBox sx={{textAlign:"left"}}>{item.name}</TextBox>
    <TextBox sx={{textAlign:"left"}}>₹ {item.price}.00</TextBox>
    <TextBox sx={{color:"grey"}}>{item.description}</TextBox>
    </InnerBox>
  ))}
  
</InnerBox>
<InnerBox sx={{width:650, textAlign:"left",marginTop:-35,marginLeft:30}}>

<FormGroup>
<FormControlLabel required control={<Checkbox />} label="I consent to my request to being processed by the selected boutique and Rado Watch Co. Ltd for the purpose of contacting me, and I confirm that I have read and understood the privacy policy." />
<FormControlLabel sx={{marginTop:5}} required  control={<Checkbox />} label="I agree that Rado contacts me about Rado products, services, events or offers and consent that Rado processes my personal data for this purpose. I confirm to have read and understood the Privacy Notice and the Cookie notice. I can always unsubscribe by clicking the opt-out link in the communication message." />
</FormGroup>

<ButtonBox onClick={handleReserve} sx={{border:"1px solid black",bgcolor:'black',width:180,height:50,borderRadius:8,marginTop:10,color:'white'}}>Reserve Now</ButtonBox>
</InnerBox>



</FirstBox>

    </OuterContainer>
  )
}

export default Info