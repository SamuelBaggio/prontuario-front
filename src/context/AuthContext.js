"use client"

import apiLogin, { apiLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState({})
    const {push} = useRouter()

    const login = async (credenciais) => {
        const resp = await apiLogin(credenciais);
        if (resp?.error) return resp
        setUser(resp)
        push("/")
    }

    const logout = () => {
        setUser(null)
        apiLogout()
        push("/login")
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}