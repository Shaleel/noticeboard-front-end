import React from "react"
import jwt_decode from "jwt-decode"

const jwt = require('jsonwebtoken');
export const UserContext = React.createContext(localStorage.getItem("token"));

export const isLoggedin=()=>{
   if(localStorage.getItem("token"))
    return true

    return false
}
export const isAdmin=()=>{
    
    const decoded=localStorage.getItem("token")!==null?jwt_decode(localStorage.getItem("token")):false;
    if(decoded)
        if(decoded.isAdmin)
        return true
    return false
}