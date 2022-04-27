import Login from "./login";
import Register from "./register";
import Users from "./user";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from "react";
class AppModule extends React.Component{
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/" exact element={<Users/>}></Route>

                </Routes>
            </Router>
        )
    }
}
export default AppModule