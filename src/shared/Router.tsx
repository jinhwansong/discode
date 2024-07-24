import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Login />}/>
                <Route path="/register" element ={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router