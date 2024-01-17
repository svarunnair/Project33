import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getResult, getSearch, postWishlist } from '../Redux/data/action'
import { useNavigate, useParams } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';


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


      const HeaderBox=styled(Box)(({theme})=>({

        background:"black",
        color:'white',
        // border:"2px solid red",
        height:350,
        
    
    
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
        fontSize:50,
    
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

      const TextBoxData=styled(Typography)(({theme})=>({
        fontSize:15,
    
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

      
      const InnerContainer=styled(Box)(({theme})=>({

        // border:"2px solid blue",
    
    
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

        // border:"2px solid yellow",
    
    
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

      const ResultMap=styled(Box)(({theme})=>({

       
        background: "#F0F0F0",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
    
    
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

      const DataMap=styled(Box)(({theme})=>({

        border: "2px solid white",    
    
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

        // border:"2px solid green",
        width:"80%",
    
    
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
function Result() {
  const [search, setSearch] = useState([]);
    const result=useSelector((store)=>store.data.getResultData)
    const mainData = useSelector((store) => store.data.getData);
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const params = useParams()
    console.log("result",result)

    console.log("params",params)

    const handleItem=(id)=>{
      navigate(`/detail/${id}`)
    }


useEffect(()=>{

  let sortData = mainData.filter((item) =>
    item.name.toLowerCase().includes(params.id)
  );

  setSearch(sortData);

},[params])
  

const handleFav=(item)=>{
   dispatch(postWishlist(item))
   alert('Product added to Wishlist')
}
     
   



    useEffect(()=>{
     dispatch(getResult())
    },[])


    useEffect(() => {
      dispatch(getData());
    }, []);

  return (
    <OuterContainer>

        <HeaderBox>
            <TextBox>Search results for:</TextBox>
            <TextBox>'{params.id}'</TextBox>
        </HeaderBox>
     <ResultMap>
      {search?.map((item)=>(
        <DataMap>

<FavoriteIconDiv>
       <FavoriteIcon onClick={()=>handleFav(item)} sx={{color:'black',justifyItems:'end',":hover":{color:"red"},cursor:'pointer'}}/>
       </FavoriteIconDiv>

          <ImageBox sx={{cursor:"pointer"}} onClick={()=>handleItem(item.id)} as={"img"} src={item?.images[0]}/>
          <TextBoxData>{item.ProductName}</TextBoxData>
          <TextBoxData sx={{color:"grey",fontSize:8}}>{item.size}</TextBoxData>
          <TextBoxData sx={{color:"grey",fontSize:8}}>{item.model}</TextBoxData>
          <TextBoxData>₹{item.price}.00</TextBoxData>


        </DataMap>
      ))}
     </ResultMap>
        

    </OuterContainer>
  )
}

export default Result