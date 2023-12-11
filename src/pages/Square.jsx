import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'

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

function Square() {

    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()

    console.log("squareData",mainData)

    useEffect(()=>{
      dispatch(getData())
    },[])
  return (
    <OuterContainer>

        <InnerBox sx={{background:"grey",}} >
<ImageBox width={700} as={'img'} src="https://www.rado.com/media/catalog/category/True_Square_9.png"/>
<TextBox marginLeft={57} width={400} >At Rado, we don’t just know square high-tech ceramic watches: We invented them! The True Square features a full high-tech ceramic case and bracelet, meeting every Rado requirement.</TextBox>
      <TextBox marginTop={5} marginLeft={8}>Read more about the collection</TextBox>
        </InnerBox>

        <InnerBox  display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>

            {mainData.map((item)=>(

                <BoxData sx={{cursor:'pointer'}}  width={350} height={500} border={"1px solid black"}>
                <ImageBox  width={300} as={"img"} src={item.images[0]}/>
                <TextBox>{item.name}</TextBox>
                <TextBox>{item.model}</TextBox>
                <TextBox>{item.price}</TextBox>
                </BoxData>

            ))}

        </InnerBox>

    </OuterContainer>
  )
}

export default Square