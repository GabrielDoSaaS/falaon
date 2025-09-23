import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterInitFinish from './pages/RegisterInitFinish'
import RegisterPage from "./pages/RegisterPage";
import SucessPage from "./pages/SucessPage";
import LoginPage from "./pages/LoginPage";
import DoneUser from "./pages/DoneUser";
import Home from "./pages/Home";


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/registerInit" element={<RegisterPage/>}/>
                <Route path="/sucess" element={<SucessPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/doneUser" element={<DoneUser/>}/>
                <Route path="/finish" element={<RegisterInitFinish/>} ></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
