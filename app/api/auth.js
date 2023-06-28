'use client'
import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

export const config = fcl.config({
    "accessNode.api": process.env.ACCESS_NODE_API,
    "discovery.wallet": process.env.DISCOVERY_WALLET

})


//function for the login 
export const Login = () => {
    fcl.authenticate();
}

//function for the logout
export const Logout = () => {
    fcl.unauthenticate();
}


