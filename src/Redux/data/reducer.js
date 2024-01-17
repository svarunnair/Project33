import { DELETE_INFO_FAILURE, DELETE_INFO_REQUIEST, DELETE_INFO_SUCCESS, DELETE_WISHLIST_FAILURE, DELETE_WISHLIST_REQUIEST, DELETE_WISHLIST_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS, GET_INFO_FAILURE, GET_INFO_REQUIEST, GET_INFO_SUCCESS, GET_RESULT_FAILURE, GET_RESULT_REQUIEST, GET_RESULT_SUCCESS, GET_SEARCH_FAILURE, GET_SEARCH_REQUIEST, GET_SEARCH_SUCCESS, GET_WISHLIST_FAILURE, GET_WISHLIST_REQUIEST, GET_WISHLIST_SUCCESS, POST_BOOKING_FAILURE, POST_BOOKING_REQUIEST, POST_BOOKING_SUCCESS, POST_INFO_FAILURE, POST_INFO_REQUIEST, POST_INFO_SUCCESS, POST_RESULT_FAILURE, POST_RESULT_REQUIEST, POST_RESULT_SUCCESS, POST_SEARCH_FAILURE, POST_SEARCH_REQUIEST, POST_SEARCH_SUCCESS, POST_WISHLIST_FAILURE, POST_WISHLIST_REQUIEST, POST_WISHLIST_SUCCESS } from "./action"



const initState={
    isError:false,
    isLoading:false,
    getData:[],
    getDetail:[],
    postInfo:[],
    getInfo:[],
    infoDelete:[],
    bookingPost:[],
    searchPost:[],
    searchGet:[],
    postResultData:[],
    getResultData:[],
    postWishlistData:[],
    getWishlistData:[],
    deleteWishlistData:[],
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


                    case POST_SEARCH_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true

            })
            case POST_SEARCH_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    searchPost:action.payload
                })
                case POST_SEARCH_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case GET_SEARCH_REQUIEST:
                        return({
                            ...state,
                            isError:false,
                            isLoading:true
            
                        })
                        case GET_SEARCH_SUCCESS:
                            return({
                                ...state,
                                isLoading:false,
                                isError:false,
                                searchGet:action.payload
                            })
                            case GET_SEARCH_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })

                                case POST_RESULT_REQUIEST:
                                    return({
                                        ...state,
                                        isError:false,
                                        isLoading:true
                        
                                    })
                                    case POST_RESULT_SUCCESS:
                                        return({
                                            ...state,
                                            isLoading:false,
                                            isError:false,
                                            postResultData:action.payload
                                        })
                                        case POST_RESULT_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })


                                            case GET_RESULT_REQUIEST:
                                    return({
                                        ...state,
                                        isError:false,
                                        isLoading:true
                        
                                    })
                                    case GET_RESULT_SUCCESS:
                                        return({
                                            ...state,
                                            isLoading:false,
                                            isError:false,
                                            getResultData:action.payload
                                        })
                                        case GET_RESULT_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })


                                            case POST_WISHLIST_REQUIEST:
                                    return({
                                        ...state,
                                        isError:false,
                                        isLoading:true
                        
                                    })
                                    case POST_WISHLIST_SUCCESS:
                                        return({
                                            ...state,
                                            isLoading:false,
                                            isError:false,
                                            postWishlistData:action.payload
                                        })
                                        case POST_WISHLIST_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })


                                            case GET_WISHLIST_REQUIEST:
                                                return({
                                                    ...state,
                                                    isError:false,
                                                    isLoading:true
                                    
                                                })
                                                case GET_WISHLIST_SUCCESS:
                                                    return({
                                                        ...state,
                                                        isLoading:false,
                                                        isError:false,
                                                        getWishlistData:action.payload
                                                    })
                                                    case GET_WISHLIST_FAILURE:
                                                        return({
                                                            ...state,
                                                            isError:true,
                                                            isLoading:false
                                                        })


                                                        case DELETE_WISHLIST_REQUIEST:
                                                return({
                                                    ...state,
                                                    isError:false,
                                                    isLoading:true
                                    
                                                })
                                                case DELETE_WISHLIST_SUCCESS:
                                                    return({
                                                        ...state,
                                                        isLoading:false,
                                                        isError:false,
                                                        deleteWishlistData:action.payload
                                                    })
                                                    case DELETE_WISHLIST_FAILURE:
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