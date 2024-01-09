import axios from "axios"



export const POST_AUTH_REQUIEST="POST_AUTH_REQUIEST"
export const POST_AUTH_SUCCESS="POST_AUTH_SUCCESS"
export const POST_AUTH_FAILURE="POST_AUTH_FAILURE"


const postAuthRequiest=()=>{
    return({
        type:POST_AUTH_REQUIEST
    })
}
const postAuthSuccess=(data)=>{
    return({
        type:POST_AUTH_SUCCESS,
        payload:data
    })
}
const postAuthFailure=()=>{
    return({
        type:POST_AUTH_FAILURE
    })
}



export const postAuth=(data)=>(dispatch)=>{
  
    dispatch(postAuthRequiest())
    return axios({
        url:"https://reqres.in/api/register",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAuthSuccess(res.data))
        localStorage.setItem('email',res.data.token)
        console.log("token",res.data.token)
        console.log("res.data",res.data)
    })
    .catch((error)=>{
        dispatch(postAuthFailure(error))
        console.log("error",error)
    })
}