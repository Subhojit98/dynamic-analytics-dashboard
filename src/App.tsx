import { useSelector } from "react-redux"
import Login from "./pages/Login/Login"
import { RootState } from "./store/DataStore"
import Home from "./pages/Home/Home"

function App() {
  const { loggedInUser } = useSelector((state: RootState) => state.allUsers)


  return (
    <>
      {!loggedInUser ? <Login /> : <Home />
      }
    </>
  )
}

export default App
