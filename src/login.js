import React from "react";
import "./common.css"
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            pass:""
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.inpChange = this.inpChange.bind(this)
        this.passChange = this.passChange.bind(this)
    }
    inpChange(e){
        this.setState({
            email:e.target.value
        })
    }
    passChange(e){
        this.setState({
            pass:e.target.value
        })
    }
    submitHandler(e){
        
        if(this.state.email ==='' || this.state.pass==='')
        {
            e.preventDefault()
            alert('Incomplete Data')
        }
        if(!localStorage.getItem(this.state.email))
        {
            e.preventDefault()
            alert('Enter Valid Credentials')
        }
        else if(localStorage.getItem(this.state.email) && JSON.parse(localStorage.getItem(this.state.email)).pass === this.state.pass )
        {
            localStorage.setItem('user',this.state.email)
        }
    }
    render(){
        
        return(
            <form action="/" onSubmit={this.submitHandler}>
                <input type="email" onChange={this.inpChange} className="loginEmail" placeholder="Email"/>
                <input type="password" onChange={this.passChange} className="loginPassword" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Login;