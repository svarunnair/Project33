import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Box, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

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


const TextBox=styled(Box)(({theme})=>({

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

  border:"2px solid red",
  width:1250,
  height:450,
  
  

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

const BoxData=styled(Box)(({theme})=>({

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

function Centrix() {

  const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleProduct=(id)=>{
      navigate(`/detail/${id}`)
    }

    console.log("CentrixData",mainData)

    useEffect(()=>{
      dispatch(getData())
    },[])
  return (
    <OuterContainer>

    <InnerBox sx={{background:"#1B1B1B",width:"100%"}} >
<ImageBox width={"50%"}  sx={{marginTop:10}} as={'img'} src="https://www.rado.com/media/catalog/category/Centrix_9.png"/>
<TextBox color={"white"} marginLeft={57} width={400} >There is a reason why Centrix is Rado’s most popular watch. Its versatility in a range of different sizes, colour combinations, quartz and automatic movements guarantees there is a model to suit all tastes.</TextBox>
  <TextBox color={"white"} marginTop={5} marginLeft={8}>Read more about the collection</TextBox>
    </InnerBox>

    <FirstBox position={"sticky"} top={100} bgcolor={"white"} sx={{width:"100%",border:"1px solid red",height:55}}>

</FirstBox>

    <InnerBox  display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>

        {mainData.map((item)=>(

            <BoxData onClick={()=>handleProduct(item.id)}  sx={{cursor:'pointer'}}  width={350} height={500} border={"1px solid black"}>
            <ImageBox  width={300} as={"img"} src={item.images[0]}/>
            <TextBox>{item.name}</TextBox>
            <TextBox sx={{color:"grey"}}>{item.model}</TextBox>
            <TextBox sx={{color:"grey"}}>{item.size}</TextBox>
            <TextBox>₹ {item.price}.00</TextBox>
            </BoxData>

        ))}

    </InnerBox>

</OuterContainer>
  )
}

export default Centrix