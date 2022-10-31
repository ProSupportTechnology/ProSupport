import { UserProvider } from "./contexts/UserContext"
import Routes from "./routes"

export function App() {
   return (
      <div className="App">
         <UserProvider>
            <Routes />
         </UserProvider>
      </div>
   )
}
