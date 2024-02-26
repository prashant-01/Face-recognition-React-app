import React, { useContext } from "react"
import logo from '../assets/download.jpg'
import { UserContext } from "../utils/context/tokenContext";
const Home = () => {
    const { user } = useContext( UserContext );
    console.log(user);
    return(
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="flex flex-col justify-center bg-gray-400 rounded-lg">
                <div className="relative h-[130px] flex items-center justify-center rounded-lg py-2 
                bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                hover:from-pink-500 hover:to-yellow-500">
                    <div className='absolute top-[40%] bg-gray-100 flex items-center justify-center 
                    w-[70px] h-[70px] rounded-[100%] hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <img 
                        src={ logo } 
                        className="w-[60px] h-[60px] rounded-[100%] object-cover aspect-square"/>
                    </div>
                    
                </div>
                <div className="p-6 text-xl text-white">
                    <p>User name : { user.firstName + ' '}{ user.lastName }</p>
                    <p>Email : { user.email }</p>
                    {/* <p>Gender Predicted : { user.gender }</p>
                    <p>Age Predicted : { user.age }</p> */}
                </div>
            </div>
        </div>
    )
}

export default Home;