import { Box, Button, Grid, Input, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData, postSearch } from '../Redux/data/action'
import SearchIcon from '@mui/icons-material/Search';


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

      const InnerDiv=styled(Box)(({theme})=>({
    
        border:"3px solid red",
        width:"250px",
       
         
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
    
       
        width:200,
        height:200,
        
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

            border:"2px solid green",
            // display:"grid",
            // gridTemplateColumns:"repeat(3,1fr)",
            display:"flex",
            
    
            
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
    
                fontSize:16,
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
    
                    background:"black",
                    color:"white",
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

function Search() {

    const navigate=useNavigate()
    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const [search,setSearch]=useState([])
    const [show,setShow]=useState(false)
    const [result,setResult]=useState(false)


    const handleProduct=(id)=>{
      navigate(`/detail/${id}`)
    }

    

    const handleSearch=(e)=>{
        let value=e.target.value 
        let sortData=mainData.filter(item=>item.name.toLowerCase().includes(value))
        setSearch(sortData)
        setShow(true)
       
    }
    console.log("sortData")

    if(search===""){
      setResult(true)
    }

    console.log("result",result)


    console.log("search",search)
    useEffect(()=>{
      dispatch(getData())
    },[])

    // useEffect(()=>{
    //   Object.keys(search.length>0){
    //     setShow(true)
    //   }
    // },[show])

    
   
    console.log("show",show)

    
const handleView=()=>{
  dispatch(postSearch(...search))
  navigate("/result")
}

// if(search.length===0){
//   setShow(false)
// }
// if(search.length!==0){
//   setShow(true)
// }

   

  return (
    <OuterContainer>

  <Input  onChange={handleSearch}  sx={{marginTop:13 ,width:600, height:85, border:"1px solid black"}}  placeholder='What are you lookig for'/>
 
<InnerBox>

    {search?.slice(0, 5)
    .map((item)=>(
        <InnerDiv sx={{cursor:"pointer"}} onClick={()=>handleProduct(item.id)}>
        <ImageBox  as={"img"} src={item.images[0]} />
        <TextBox sx={{}}>{item.name}</TextBox>
        </InnerDiv>
    ))}

</InnerBox>

{search.length!==0&&<ButtonBox onClick={handleView}>View all {search.length} products</ButtonBox>}
    </OuterContainer>
  )
}

export default Search