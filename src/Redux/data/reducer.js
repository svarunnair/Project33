import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS } from "./action"



const initState={
    isError:false,
    isLoading:false,
    getData:[],
    getDetail:[]
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



                    default:
                        return({
                            ...state
                        })
    }
}