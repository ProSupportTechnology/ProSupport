import { createContext, ReactNode, useContext } from "react"

interface iUserContextProps {
   children: ReactNode
}

const UserContext = createContext({})

export function UserProvider({ children }: iUserContextProps) {
   return <UserContext.Provider value={""}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)
