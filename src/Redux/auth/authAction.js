import axios from "axios"



export const POST_AUTH_REQUIEST="POST_AUTH_REQUIEST"
export const POST_AUTH_SUCCESS="POST_AUTH_SUCCESS"
export const POST_AUTH_FAILURE="POST_AUTH_FAILURE"

export const POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"


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

const postSignupRequiest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
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


export const postSignup=(data)=>(dispatch)=>{
  
    dispatch(postSignupRequiest())
    return axios({
        url:"http://localhost:8000/signup",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("res.data",res.data)
    })
    .catch((error)=>{
        dispatch(postSignupFailure(error))
        console.log("error",error)
    })
}