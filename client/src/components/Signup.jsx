import React, { useContext } from "react"
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { faceio } from "../utils/constants"; 
import { signUpUser } from "../services/apiCall";
import { TokenContext, UserContext } from "../utils/context/tokenContext.js";

const SignUp = () => {
    const {
        register ,
        handleSubmit ,
        formState : { errors }
    } = useForm();

    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext( UserContext );
    const onSubmit = async (data) => {
        try{

            // ! Enroll Function
            const userInfo = await faceio.enroll({
                locale: "auto",
                userConsent : true ,
                payload : {
                    "firstName" : data.firstName ,
                    "lastName" : data.lastName ,
                    "email" : data.email
                }
            });
            console.log(userInfo)

            const result = await signUpUser({
                firstName : data.firstName ,
                lastName : data.lastName ,
                email : data.email ,
                facialId : userInfo.facialId
            })
            if( result ){
                setToken(userInfo.facialId);
                setUser({
                    firstName : data.firstName ,
                    lastName : data.lastName ,
                    email : data.email ,
                    facialId : userInfo.facialId
                });
                toast.success('Signed Up!')
                navigate('/home');
            }
        }
        catch(error){
            console.error(error);
            toast.error("Error in signing up");
            navigate('/');
        }
    }
    return(
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <form onSubmit={ handleSubmit( onSubmit ) }
            className="flex flex-col gap-3 shadow-lg bg-gradient-to-br from-[#d04ed6] to-[#834d9b] p-8 rounded-lg border text-white">
                <div className="flex gap-2 justify-between items-center">
                    <label htmlFor="firstName" className="text-lg">First Name<sup className="text-red-600">*</sup></label>
                    <input type="text" 
                        id="firstName"
                        { ...register( "firstName" , { required : true } ) }
                        className="bg-transparent border border-white rounded-md focus:outline-none p-2" 
                    />
                    {
                        errors.firstName && <span className="text-red-600 text-sm italic">First name is required</span>
                    }
                </div>
                <div className="flex gap-2 justify-between items-center">
                    <label htmlFor="firstName" className="text-lg">Last Name<sup className="text-red-600">*</sup></label>
                    <input type="text" 
                        id="lastName"
                        { ...register( "lastName" , { required : true } ) }
                        className="bg-transparent border border-white rounded-md focus:outline-none p-2" 
                    />
                    {
                        errors.lastName && <span className="text-red-600 text-sm italic">Last name is required</span>
                    }
                </div>
                <div className="flex gap-2 justify-between items-center">
                    <label htmlFor="email" className="text-lg">Email<sup className="text-red-600">*</sup></label>
                    <input type="text" 
                        id="email"
                        { ...register( "email" , { required : true } ) }
                        className="bg-transparent border border-white rounded-md focus:outline-none p-2" 
                    />
                    {
                        errors.email && <span className="text-red-600 text-sm italic">Email is required</span>
                    }
                </div>
                <button type="submit" className="border border-white p-3 rounded-lg mt-10">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;