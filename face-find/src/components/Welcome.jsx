import React from "react"
const Welcome = () => {
    return (
        <div className="bg-transparent w-full min-h-[calc(100vh-5rem)] 
        flex flex-col items-center justify-center">
            <p className="text-[50px] font-semibold mb-5 font-serif text-center">Welcome to your Facial Recognition App!</p>
            <p className="text-md italic px-5 md:px-0 md:mx-72 text-center">
                Experience the future of secure and convenient authentication with our advanced facial recognition technology. 
                Say goodbye to traditional passwords and cumbersome authentication methods.
            </p>
        </div>
    )
}

export default Welcome;