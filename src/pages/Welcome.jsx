import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'


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

 width:"40%",

 
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


  const InsertImage=styled(Box)(({theme})=>({

  
    width:"100%",
 
 
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

    color:"white",
    position:"absolute",
    bottom:320,
    left:200,
    fontSize:31,


    
    
 
 
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

    border:"1px solid white",
    color:"white",
    bottom:200,
    right:400,
    borderRadius:"22px",
    width:160,
    height:50,
 
 
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

   border:"2px solid red",
    background:"black",
    color:"white",
    paddingBottom:120,
    top:200,
   justifyContent:"center",
   justifyItems:"center",
 textAlign:"center",
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

  const DetailBox=styled(Typography)(({theme})=>({
 
    justifyContent:"center",
    justifyItems:"center",
    

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

  const SlidingBox=styled(Box)(({theme})=>({
   
    width:"100%",
    overflow:"auto",
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

  const InnerText=styled(Box)(({theme})=>({

    width:600,
    justifyItems:"center",
    justifyContent:"center",
    left:140,
    border:"2px solid red",
    textAlign:"center",
   
    

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

  const TextContent=styled(Typography)(({theme})=>({
  

textAlign:"left",
padding:130,

        
    
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

      const TextDetails=styled(Typography)(({theme})=>({

        
            
        
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

          const ImageSecond=styled(Box)(({theme})=>({

        width: "50%",
        height:"90%",
        marginTop:140,
            
        
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

          const ButtonDiscover=styled(Box)(({theme})=>({

        color:"black",

                
            
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
    


function Welcome() {



  let rado=[{
    img:"https://www.rado.com/media/sgecom_contentsystem/PDP_Images/Carousel_5000x3756_2.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center",
    id:1
         }]
  return (
   <OuterContainer>

<InsertImage as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill"/>
<TextBox>CENTRIX AUTOMATIC DIAMONDS</TextBox>
<ButtonBox>Discover more</ButtonBox>


<FirstBox >
  <InnerText>
    <DetailBox>Explore our latest creations</DetailBox>
    <DetailBox>Rado is known as the Master of Materials: from high-tech ceramic to sapphire crystal and diamonds to stainless steel, our innovative watches have no boundaries when it comes to design. Feel and discover the Rado difference!</DetailBox>
    </InnerText>
</FirstBox>

<SlidingBox>

{rado.map((item)=>(
  <>
  <ImageBox as={"img"} src= {item.img}/>
  </>
))}

<ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/true-square-skeleton-all-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>

<ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/new-centrix-carousel.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>

<ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/view-all-collections.jpg?im=Resize=(1800,1352),aspect=fill;Crop=(0,0,1800,1352),gravity=Center"/>
</SlidingBox>


<SecondBox>
  
  <TextContent>
    <TextDetails sx={{fontWeight:500,fontSize:33}}>5-year International Warranty</TextDetails>
    <TextDetails sx={{fontWeight:500,fontSize:14,paddingTop:5}}>As of 1st November 2023, all new Rado watches benefit from a 5-year International Warranty.</TextDetails>
    <TextDetails sx={{paddingTop:5}}>At Rado we have always made watches that are built to last – not just for a few years, but for a lifetime. We take care to use materials that are proven to resist wear and tear. High-tech ceramic cases and bracelets, Ceramos™, sapphire crystal, stainless steel and titanium all serve to enclose and protect the sophisticated Swiss movements that power our watches. We take great pride in the high quality, reliability and performance of our products, and are pleased to offer our customers additional support in the care and handling of their watches.</TextDetails>
    <TextDetails sx={{fontWeight:900}}>_____</TextDetails>
    <ButtonDiscover>Discover more{">"}</ButtonDiscover>
  </TextContent>

  <ImageSecond  as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-extension-homepage-block.jpg?im=Resize=(800,657),aspect=fill;Crop=(0,0,800,657),gravity=Center"/>

</SecondBox>


   </OuterContainer>
  )
}

export default Welcome