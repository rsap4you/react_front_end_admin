import { createAsyncThunk } from "@reduxjs/toolkit";
// import { registerApi } from "../../services/apiHandler";
// import { otpVerificationApi } from "../../services/apiHandler";
import { loginApi } from "../../services/ApiHandler";
import { registerApi } from "../../services/ApiHandler";
import { logoutApi } from "../../services/ApiHandler";
import { userListApi } from "../../services/ApiHandler";


import toastr from 'toastr';
import 'toastr/toastr.scss';


export const loginRedux = createAsyncThunk("user/login", async (data) => {
    try {
        let request = {
            "emailmobile": data?.emailmobile,
            "password": data?.password,
        }
        const response = await loginApi(data);
        console.log('response: ', response);
        if (response.code === 200) {
            toastr.success(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
            localStorage.setItem('userData', JSON.stringify(response.data));
        } else if (response.code == 401) {
            toastr.error(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
            localStorage.setItem('email', JSON.stringify(data?.emailmobile));
        } else {
            toastr.error(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        }
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
})


export const registerRedux = createAsyncThunk("user/register", async (data) => {
    try {
        const response = await registerApi(data);
        console.log('response11: ', response);
        if (response.code === 200) {
            toastr.success(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });

        } else {
            toastr.error(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        }
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
})


export const userApiRedux = createAsyncThunk("user/userlist", async (data) => {
    try {
        const response = await userListApi(data);
  
        if (response.code === 200) {
            toastr.success(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        } else {
            toastr.error(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        }
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
})



export const logoutRedux = createAsyncThunk("user/logout", async (data) => {
    try {
        const response = await logoutApi(data);
        console.log('logout: ', response);
        if (response.code === 200) {
            toastr.success(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        } else {
            toastr.error(response.message, 'Event', {
                progressBar: true,
                timeOut: 3000,
            });
        }
        return response
    } catch (error) {
        console.error(error);
        throw error;
    }
})



