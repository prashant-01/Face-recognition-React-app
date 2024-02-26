import toast from "react-hot-toast";
import axios from 'axios'
import { BASE_URL } from "../utils/constants"; 

export const signUpUser = async (data) => {
    let result = null;
    try{
        const response = await axios.post( `${ BASE_URL + '/auth/signup' }` , data );
        if( !response.data.success ){
            throw new Error(response.data.message);
        }
        console.log( 'Signup call successfull ' , response.data );
        result = response.data.data;
    }catch(error){
        console.log(error);
        toast.error('Error in creating signup DB');
    }
    return result;
}

export const loginUser = async ( data ) => {
    let result = null;
    try{
        const response = await axios.post( `${ BASE_URL + '/auth/login' }` , data );
        if( !response.data.success ){
            throw new Error(response.data.message);
        }
        console.log( 'login call successfull ' , response.data );
        result = response.data.data;
    }catch(error){
        console.log(error);
        toast.error('User does not exist , Please SignUp!');
    }
    return result;
}