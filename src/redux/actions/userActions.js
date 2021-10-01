import {USER_SIGNIN_REQUEST, 
        USER_SIGNIN_SUCCESS, 
        USER_SIGNIN_FAIL, 
        USER_SIGNOUT, 
        USER_SIGNUP_REQUEST, 
        USER_SIGNUP_SUCCESS, 
        USER_SIGNUP_FAIL } from '../constants/userConstants';
import axios from 'axios';

export const signup = ({name, email, password}) => {
    return async(dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST, 
            payload: {name, email, password}
        });
        const {data} = await axios.post('/user/signup', {name, email, password});
        //console.log(data);
        
        if(data.token){
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            dispatch({
                type: USER_SIGNIN_REQUEST,
                payload: data
            });
        }else {
            dispatch({
                type: USER_SIGNUP_FAIL,
                payload: data.msg
            })
        }
        return data;
    }
}

export const signin = ({email, password}) => {
    return async(dispatch) => {
        dispatch({
            type: USER_SIGNIN_REQUEST, 
            payload: {email, password}
        });
        const {data} = await axios.post('/user/signin', {email, password});
        //console.log('esta es la data',data)
        // if(data.token){
        if(data.name){
            dispatch({
                type: USER_SIGNIN_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        }else {
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: data.msg
            })
        }
        return data;
    }
}

export const signinfirebase = (info) => {
    //console.log(info)
    return async(dispatch) => {
        dispatch({
            type: USER_SIGNIN_REQUEST, 
            payload: info
        });
        const {data} = await axios.post('/user/signinfirebase', info);
        //console.log(data)
        // if(data.token){
        if(data.name){    
            dispatch({
                type: USER_SIGNIN_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        }else {
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: data.msg
            })
        }
        return data;
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cart');
    dispatch({
        type: USER_SIGNOUT
    });
}