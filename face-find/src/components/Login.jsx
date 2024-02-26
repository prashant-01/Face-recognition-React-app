import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { faceio } from "../utils/constants"; 
import { loginUser } from "../services/apiCall";
import { TokenContext, UserContext } from '../utils/context/tokenContext';
const Login = () => {
    const { setUser } = useContext( UserContext );
    const { setToken } = useContext( TokenContext );
    const navigate = useNavigate();


    const handleLogin = async () => {
        try{

            // ! Authenticate Function
            const userData = await faceio.authenticate({
                locale: "auto", 
            });
            console.log("Success, user identified" , userData)
            console.log("Linked facial Id: " + userData.facialId)
            console.log("Payload: " + JSON.stringify(userData.payload))

            const response = await loginUser( { facialId : userData.facialId } );
            if( response ){
                setToken(userData.facialId);
                setUser(response);
                toast.success("Logged in!");
                navigate('/home')
                // <Navigate to={ `/home` } />
            }
        }catch(error){
            console.log(error);
            toast.error("Error in Login");
            navigate('/')
        }
    }
    return (
        <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center ">
            <div className='rounded-lg shadow-lg bg-gradient-to-br from-[#d04ed6] to-[#834d9b] p-8 flex flex-col gap-10 items-center justify-center'>
                <p className="text-xl font-serif font-semibold">Login To Enter Home Page</p>
                <button className='border p-4 rounded-lg font-semibold' onClick={handleLogin}>Log In</button>
            </div>
        </div>
    )
}

export default Login;