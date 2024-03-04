import AxiosClientApi from "./AuthService";
// import AxiosClientApiImage from "./AuthserviceImage";

/*==================================================== 
    Auth Routers                                                                              
====================================================== */

export function registerApi(request) {
    return AxiosClientApi.post('v1/user-auth/register', request)
}



export function loginApi(request) {
    return AxiosClientApi.post('v1/user-auth/login', request)
}


export function logoutApi(request) {
    return AxiosClientApi.post('v1/user-auth/logout', request)
}

export function userListApi(request) {
    return AxiosClientApi.post('v1/user-auth/userlist', request)
}
