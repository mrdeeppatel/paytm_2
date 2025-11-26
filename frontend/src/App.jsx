// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from "../mainPages/signup"
import { SignIn } from "../mainPages/signin"
function Home() {

  return <div className="text-3xl font-bold text-pink-600" >
    HOME
  </div>
}
function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </>
}
export default App
