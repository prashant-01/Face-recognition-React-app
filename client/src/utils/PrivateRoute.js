import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { TokenContext } from './context/tokenContext'

function PrivateRoute( { children } ) {
    const { token } = useContext( TokenContext );
    if( token !== null ){
        return children;
    }
    else{
        return <Navigate to={ `/` } />
    }
}

export default PrivateRoute