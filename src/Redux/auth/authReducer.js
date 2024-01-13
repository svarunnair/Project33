import { POST_AUTH_FAILURE, POST_AUTH_REQUIEST, POST_AUTH_SUCCESS, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"



const iniState={
    isError:false,
    isLoading:false,
    postAuth:[],
    postSignupData:[]

}

export const authReducer=(state=iniState,action)=>{
    switch(action.type){
        case POST_AUTH_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_AUTH_SUCCESS:
            return({
                ...state,
                isError:false,
                isLoading:false,
                postAuth:action.payload
            })
            case POST_AUTH_FAILURE:
            return({
                ...state,
                isError:true,
                isLoading:false
            })

            case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
            return({
                ...state,
                isError:false,
                isLoading:false,
                postSignupData:action.payload
            })
            case POST_SIGNUP_FAILURE:
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