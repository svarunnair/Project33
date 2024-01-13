import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_DETAIL_REQUIEST="GET_DETAIL_REQUIEST"
export const GET_DETAIL_SUCCESS="GET_DETAIL_SUCCESS"
export const GET_DETAIL_FAILURE="GET_DETAIL_FAILURE"

export const POST_INFO_REQUIEST="POST_INFO_REQUIEST"
export const POST_INFO_SUCCESS="POST_INFO_SUCCESS"
export const POST_INFO_FAILURE="POST_INFO_FAILURE"

export const GET_INFO_REQUIEST="GET_INFO_REQUIEST"
export const GET_INFO_SUCCESS="GET_INFO_SUCCESS"
export const GET_INFO_FAILURE="GET_INFO_FAILURE"

export const DELETE_INFO_REQUIEST="DELETE_INFO_REQUIEST"
export const DELETE_INFO_SUCCESS="DELETE_INFO_SUCCESS"
export const DELETE_INFO_FAILURE="DELETE_INFO_FAILURE"

export const POST_BOOKING_REQUIEST="POST_BOOKING_REQUIEST"
export const POST_BOOKING_SUCCESS="POST_BOOKING_SUCCESS"
export const POST_BOOKING_FAILURE="POST_BOOKING_FAILURE"

export const POST_SEARCH_REQUIEST="POST_SEARCH_REQUIEST"
export const POST_SEARCH_SUCCESS="POST_SEARCH_SUCCESS"
export const POST_SEARCH_FAILURE="POST_SEARCH_FAILURE"


export const GET_SEARCH_REQUIEST="GET_SEARCH_REQUIEST"
export const GET_SEARCH_SUCCESS="GET_SEARCH_SUCCESS"
export const GET_SEARCH_FAILURE="GET_SEARCH_FAILURE"




const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const getDetailRequiest=()=>{
    return({
        type:GET_DETAIL_REQUIEST
    })
}
const getDetailSuccess=(data)=>{
    return({
        type:GET_DETAIL_SUCCESS,
        payload:data
    })
}
const getDetailFailure=()=>{
    return({
        type:GET_DETAIL_FAILURE
    })
}

const postInfoRequiest=()=>{
    return({
        type:POST_INFO_REQUIEST
    })
}
const postInfoSuccess=(data)=>{
    return({
        type:POST_INFO_SUCCESS,
        payload:data
    })
}
const postInfoFailure=()=>{
    return({
        type:POST_INFO_FAILURE
    })
}
const   getInfoRequiest=()=>{
    return({
        type:GET_INFO_REQUIEST
    })
}
const   getInfoSuccess=(data)=>{
    return({
        type:GET_INFO_SUCCESS,
        payload:data
    })
}
const   getInfoFailure=()=>{
    return({
        type:GET_INFO_FAILURE
    })
}

const deleteInfoRequiest=()=>{
    return({
        type:DELETE_INFO_REQUIEST
    })
}
const deleteInfoSuccess=(data)=>{
    return({
        type:DELETE_INFO_SUCCESS,
        payload:data
    })
}
const deleteInfoFailure=()=>{
    return({
        type:DELETE_INFO_FAILURE
    })
}

const postBookingRequiest=()=>{
    return({
        type:POST_BOOKING_REQUIEST
    })
}
const postBookingSuccess=(data)=>{
    return({
        type:POST_BOOKING_SUCCESS,
        payload:data
    })
}
const postBookingFailure=()=>{
    return({
        type:POST_BOOKING_FAILURE
    })
}

const postSearchRequiest=()=>{
    return({
        type:POST_SEARCH_REQUIEST
    })
}
const postSearchSuccess=(data)=>{
    return({
        type:POST_SEARCH_SUCCESS,
        payload:data
    })
}
const postSearchFailure=()=>{
    return({
        type:POST_SEARCH_FAILURE
    })
}

const getSearchRequiest=()=>{
    return({
        type:GET_SEARCH_REQUIEST
    })
}
const getSearchSuccess=(data)=>{
    return({
        type:GET_SEARCH_SUCCESS,
        payload:data
    })
}
const getSearchFailure=()=>{
    return({
        type:GET_SEARCH_FAILURE
    })
}




export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("getData",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })
}

export const getDetail=(id)=>(dispatch)=>{
    dispatch(getDetailRequiest())
    return axios({
        url:`http://localhost:8000/data/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDetailSuccess(res.data))
        console.log("getDetail",res.data)
    })
    .catch((error)=>{
        dispatch(getDetailFailure())
    })
}


export const postInfo=(data)=>(dispatch)=>{
    dispatch(postInfoRequiest())
    return axios({
        url:"http://localhost:8000/info",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postInfoSuccess(res.data))
        console.log("postInfo",res.data)
    })
    .catch((error)=>{
        dispatch(postInfoFailure())
    })
}

export const getInfo=()=>(dispatch)=>{
    dispatch(getInfoRequiest())
    return axios({
        url:"http://localhost:8000/info",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getInfoSuccess(res.data))
        console.log("getInfo",res.data)
    })
    .catch((error)=>{
        dispatch(getInfoFailure())
    })
}

export const deleteInfo=(id)=>(dispatch)=>{
    dispatch(deleteInfoRequiest())
    return axios({
        url:`http://localhost:8000/info/${id}`,
        method:"DELETE"
    })
    .then((res)=>{
        dispatch(deleteInfoSuccess(res.data))
        console.log("deleteInfo",res.data)
    })
    .catch((error)=>{
        dispatch(deleteInfoFailure())
    })
}

export const postBooking=(data)=>(dispatch)=>{
    dispatch(postBookingRequiest())
    return axios({
        url:"http://localhost:8000/booking",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postBookingSuccess(res.data))
        console.log("postBooking",res.data)
    })
    .catch((error)=>{
        dispatch(postBookingFailure())
    })
}

export const postSearch=(data)=>(dispatch)=>{
    dispatch(postSearchRequiest())
    return axios({
        url:"http://localhost:8000/search",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSearchSuccess(res.data))
        console.log("postSearch",res.data)
    })
    .catch((error)=>{
        dispatch(postSearchFailure())
    })
}

export const getSearch=()=>(dispatch)=>{
    dispatch(getSearchRequiest())
    return axios({
        url:"http://localhost:8000/search",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getSearchSuccess(res.data))
        console.log("getSearch",res.data)
    })
    .catch((error)=>{
        dispatch(getSearchFailure())
    })
}