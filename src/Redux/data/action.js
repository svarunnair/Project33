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

export const POST_RESULT_REQUIEST="POST_RESULT_REQUIEST"
export const POST_RESULT_SUCCESS="POST_RESULT_SUCCESS"
export const POST_RESULT_FAILURE="POST_RESULT_FAILURE"

export const GET_RESULT_REQUIEST="GET_RESULT_REQUIEST"
export const GET_RESULT_SUCCESS="GET_RESULT_SUCCESS"
export const GET_RESULT_FAILURE="GET_RESULT_FAILURE"

export const POST_WISHLIST_REQUIEST="POST_WISHLIST_REQUIEST"
export const POST_WISHLIST_SUCCESS="POST_WISHLIST_SUCCESS"
export const POST_WISHLIST_FAILURE="POST_WISHLIST_FAILURE"

export const GET_WISHLIST_REQUIEST="GET_WISHLIST_REQUIEST"
export const GET_WISHLIST_SUCCESS="GET_WISHLIST_SUCCESS"
export const GET_WISHLIST_FAILURE="GET_WISHLIST_FAILURE"

export const DELETE_WISHLIST_REQUIEST="DELETE_WISHLIST_REQUIEST"
export const DELETE_WISHLIST_SUCCESS="DELETE_WISHLIST_SUCCESS"
export const DELETE_WISHLIST_FAILURE="DELETE_WISHLIST_FAILURE"

export const GET_INFODATA_REQUIEST="GET_INFODATA_REQUIEST"
export const GET_INFODATA_SUCCESS="GET_INFODATA_SUCCESS"
export const GET_INFODATA_FAILURE="GET_INFODATA_FAILURE"




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

const getInfodataRequiest=()=>{
    return({
        type:GET_INFODATA_REQUIEST
    })
}
const getInfodataSuccess=(data)=>{
    return({
        type:GET_INFODATA_SUCCESS,
        payload:data
    })
}
const getInfodataFailure=()=>{
    return({
        type:GET_INFODATA_FAILURE
    })
}

const deleteWishlistRequiest=()=>{
    return({
        type:DELETE_WISHLIST_REQUIEST
    })
}
const deleteWishlistSuccess=(data)=>{
    return({
        type:DELETE_WISHLIST_SUCCESS,
        payload:data
    })
}
const deleteWishlistFailure=()=>{
    return({
        type:DELETE_WISHLIST_FAILURE
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

const postResultRequiest=()=>{
    return({
        type:POST_RESULT_REQUIEST
    })
}
const postResultSuccess=(data)=>{
    return({
        type:POST_RESULT_SUCCESS,
        payload:data
    })
}
const postResultFailure=()=>{
    return({
        type:POST_RESULT_FAILURE
    })
}

const getResultRequiest=()=>{
    return({
        type:GET_RESULT_REQUIEST
    })
}
const getResultSuccess=(data)=>{
    return({
        type:GET_RESULT_SUCCESS,
        payload:data
    })
}
const getResultFailure=()=>{
    return({
        type:GET_RESULT_FAILURE
    })
}
const postWishlistRequiest=()=>{
    return({
        type:POST_WISHLIST_REQUIEST
    })
}
const postWishlistSuccess=(data)=>{
    return({
        type:POST_WISHLIST_SUCCESS,
        payload:data
    })
}
const postWishlistFailure=()=>{
    return({
        type:POST_WISHLIST_FAILURE
    })
}

const getWishlistRequiest=()=>{
    return({
        type:GET_WISHLIST_REQUIEST
    })
}
const getWishlistSuccess=(data)=>{
    return({
        type:GET_WISHLIST_SUCCESS,
        payload:data
    })
}
const getWishlistFailure=()=>{
    return({
        type:GET_WISHLIST_FAILURE
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
export const postResult=(data)=>(dispatch)=>{
console.log("cappp",data)
    dispatch(postResultRequiest())
    return axios({
        url:`http://localhost:8000/data`,
        // params: {
        //     search: 'Anatom Automatic'
        //   },
        //   method: 'GET'
       
    })
    .then((res)=>{
        console.log("postResult redux",res.data)
        dispatch(postResultSuccess(res.data))
        
    })
    .catch((error)=>{
        dispatch(postResultFailure())
    })
}

export const getResult=()=>(dispatch)=>{
    dispatch(getResultRequiest())
    return axios({
        url:"http://localhost:8000/result",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getResultSuccess(res.data))
        console.log("getResult",res.data)
    })
    .catch((error)=>{
        dispatch(getResultFailure())
    })
}
export const postWishlist=(data)=>(dispatch)=>{
    dispatch(postWishlistRequiest())
    return axios({
        url:"http://localhost:8000/wishlist",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postWishlistSuccess(res.data))
        console.log("postWishlist",res.data)
    })
    .catch((error)=>{
        dispatch(postWishlistFailure())
    })
}

export const getWishlist=()=>(dispatch)=>{
    dispatch(getWishlistRequiest())
    return axios({
        url:"http://localhost:8000/wishlist",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getWishlistSuccess(res.data))
        console.log("getWishlist",res.data)
    })
    .catch((error)=>{
        dispatch(getWishlistFailure())
    })
}

export const deleteWishlist=(id)=>(dispatch)=>{
    dispatch(deleteWishlistRequiest())
    return axios({
        url:`http://localhost:8000/wishlist/${id}`,
        method:"DELETE",
    })
    .then((res)=>{
        dispatch(deleteWishlistSuccess(res.data))
        console.log("deleteWishlist",res.data)
    })
    .catch((error)=>{
        dispatch(deleteWishlistFailure())
    })
}

export const getInfodata=(id)=>(dispatch)=>{
    dispatch(getInfodataRequiest())
    return axios({
        url:`http://localhost:8000/data/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch(getInfodataSuccess(res.data))
        console.log("getInfodata",res.data)
    })
    .catch((error)=>{
        dispatch(getInfodataFailure())
    })
}