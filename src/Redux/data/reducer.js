import { DELETE_INFO_FAILURE, DELETE_INFO_REQUIEST, DELETE_INFO_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS, GET_INFO_FAILURE, GET_INFO_REQUIEST, GET_INFO_SUCCESS, POST_BOOKING_FAILURE, POST_BOOKING_REQUIEST, POST_BOOKING_SUCCESS, POST_INFO_FAILURE, POST_INFO_REQUIEST, POST_INFO_SUCCESS } from "./action"



const initState={
    isError:false,
    isLoading:false,
    getData:[],
    getDetail:[],
    postInfo:[],
    getInfo:[],
    infoDelete:[],
    bookingPost:[]
}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getData:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case GET_DETAIL_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case GET_DETAIL_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getDetail:action.payload
                })
                case GET_DETAIL_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case POST_INFO_REQUIEST:
                        return({
                            ...state,
                            isError:false,
                            isLoading:true
            
                        })
                        case POST_INFO_SUCCESS:
                            return({
                                ...state,
                                isLoading:false,
                                isError:false,
                                postInfo:action.payload
                            })
                            case POST_INFO_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })


      case GET_INFO_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case GET_INFO_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getInfo:action.payload
                })
                case GET_INFO_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case DELETE_INFO_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case DELETE_INFO_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    infoDelete:action.payload
                })
                case DELETE_INFO_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case POST_BOOKING_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case POST_BOOKING_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    bookingPost:action.payload
                })
                case POST_BOOKING_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })




                    default:
                        return({
                            ...state
                        })
    }
}