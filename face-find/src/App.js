import React, { useState } from "react";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SignUp from "./components/Signup";
import { TokenContext , UserContext } from './utils/context/tokenContext';
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
    const [ token , setToken ] = useState(null);
    const [ user , setUser ] = useState(null);
    return(
        <div className="w-screen min-h-screen flex flex-col
        bg-gradient-to-br from-[#ffffff] from-50% to-[#abbaab] to-50%">
            <TokenContext.Provider value={ {
                token ,
                setToken
            } }>
                <UserContext.Provider value={{
                    user , 
                    setUser
                }}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={ <Welcome/> } />
                        <Route path="/signup" element={ <SignUp/> } />
                        <Route path="/login" element={ <Login/> } />
                        <Route path="/home" element={ 
                            <PrivateRoute>
                                <Home/>
                            </PrivateRoute> } 
                        />
                    </Routes>
                </UserContext.Provider>
            </TokenContext.Provider>
        </div>
    )
}

export default App;