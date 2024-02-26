import React, { useContext, useState } from "react";
import logo from '../assets/face-id.png'
import menu from '../assets/menu.png'
import { Link, useNavigate } from "react-router-dom";
import { TokenContext, UserContext } from "../utils/context/tokenContext";
const NavBar = () => {
    const [ isOpen , setIsOpen ] = useState(false);
    const navigate = useNavigate();
    const { token , setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);
    return(
        <div className="sticky top-0 bg-gray-300 md:flex md:justify-around md:items-center bg-transparent md:py-2 shadow-lg font-semibold text-white">
            <div className="flex items-center justify-between px-4 md:px-0">
                <Link to='/' className="flex items-end">
                    <img src={ logo }></img>
                    <p className="pb-[2px] font-serif cursor-pointer
                    bg-gradient-to-br from-[#c025ff] to-[#216aff] bg-clip-text text-transparent">FaceFindr</p>
                </Link>
                <div className="md:hidden">
                    <img onClick={ () => setIsOpen(!isOpen) }
                    src={ menu } 
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div className={ `${ isOpen ?  'block' : 'hidden' } md:flex md:items-center md:gap-4` }>
                <p className="bg-[#abbaab] p-2 border rounded-lg cursor-pointer">Home</p>
                <p className="bg-[#abbaab] p-2 border rounded-lg cursor-pointer">About</p>
                <p className="bg-[#abbaab] p-2 border rounded-lg cursor-pointer">Contact</p>
            </div>
            <div>
            <div className={ `${ isOpen ?  'block' : 'hidden' } md:flex md:items-center md:gap-4` }>
                <Link to='/login' className="bg-[#abbaab] p-2 border rounded-lg cursor-pointer">Login</Link>
                <Link to='/signup' className="bg-[#abbaab] p-2 border rounded-lg cursor-pointer">Sign Up</Link>
            </div>
            </div>
        </div>
    )
}
export default NavBar;