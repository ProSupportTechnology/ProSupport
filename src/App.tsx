import { UserProvider } from "./contexts/UserContext"
import Routes from "./routes"

export const App = () => {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  )
}
