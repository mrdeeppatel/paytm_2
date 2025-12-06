// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from "../pages/signup"
import { SignIn } from "../pages/signin"
import { Home } from "../pages/home"
import { TransferMoney } from "../pages/transferMony"

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transfer" element={<TransferMoney />} />
      </Routes>
    </BrowserRouter>
  </>
}
export default App
