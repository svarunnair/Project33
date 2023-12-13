import { Box, Pagination, PaginationItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

function Square() {

    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const [page, setPage] = useState(1);
    const [data,setData]=useState([])

    useEffect(()=>{
     setData(mainData)
    },[mainData])

    const handleChange = (event, value) => {
      setPage(value);
    };
    console.log("squareData",mainData)

    useEffect(()=>{
      dispatch(getData())
    },[])




  return (
    <OuterContainer>

        <InnerBox  sx={{background:"#1B1B1B",marginTop:7,width:"100%"}} >
<ImageBox width={"50%"} as={'img'}  src="https://www.rado.com/media/catalog/category/True_Square_9.png"/>
<TextBox marginLeft={46} marginTop={4} width={600} color={"white"} >At Rado, we don’t just know square high-tech ceramic watches: We invented them! The True Square features a full high-tech ceramic case and bracelet, meeting every Rado requirement.</TextBox>
      <TextBox color={"white"} sx={{cursor:'pointer'}} marginTop={5} marginLeft={8} marginBottom={5}>Read more about the collection {">"}</TextBox>
        </InnerBox>
        <FirstBox position={"sticky"} top={100} bgcolor={"white"} sx={{width:"100%",border:"1px solid red",height:55}}>

        </FirstBox>

        <InnerBox  display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>

            {mainData.map((item)=>(

                <BoxData sx={{cursor:'pointer'}}  width={350} height={500} border={"1px solid black"}>
                <ImageBox  width={300} as={"img"} src={item.images[0]}/>
                <TextBox>{item.name}</TextBox>
                <TextBox>{item.model}</TextBox>
                <TextBox>{item.price}</TextBox>
                </BoxData>

            ))}
 <Pagination
 onChange={handleChange}
 count={10} page={page}
          />
   
        </InnerBox>

    </OuterContainer>
  )
}

export default Square