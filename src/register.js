import React from "react";
import "./common.css"
class InputFields extends React.Component{
    constructor(props){
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(e){
        this.props.change(e.target.value)
    }
    render(){
        return(
            <input {...this.props} onChange={this.changeHandler} style={{maxWidth:'400px',height:'28px',marginBottom:'10px'}} required></input>
        )
    }
}
class Register extends React.Component{
    constructor(props){
        super(props)
        this.fname="";
        this.lname="";
        this.email="";
        this.type="";
        this.number="";
        this.pass="";
        this.confirm="";


        this.fnameChange=this.fnameChange.bind(this)
        this.lnameChange=this.lnameChange.bind(this)
        this.emailChange=this.emailChange.bind(this)
        this.typeChange=this.typeChange.bind(this)
        this.numChange=this.numChange.bind(this)
        this.passChange=this.passChange.bind(this)
        this.confirmChange=this.confirmChange.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    fnameChange(data){
        this.fname =data;
        
    }
    lnameChange(data){
        this.lname=data
        
    }
    emailChange(data){
        this.email=data
        
    }
    typeChange(e){
        this.type=e.target.value;
        console.log(this.type)
    }
    numChange(data){
        this.number=data;
    }
    passChange(data){
        this.pass=data;
    }
    confirmChange(data){
        this.confirm=data
    }
    submitHandler(e){
        if(this.pass !== this.confirm || this.number.length<10 || this.number.length<10){
            e.preventDefault();
            alert("Enter proper data")
        }
        if(localStorage.getItem(this.email))
        {
            e.preventDefault();
            alert("User Exist")
        }
        let obj = {
            fname:this.fname,
            lname:this.lname,
            email:this.email,
            type:this.type,
            number:this.number,
            pass:this.pass,
            confirm:this.confirm
        }
        localStorage.setItem(this.email,JSON.stringify(obj))
        localStorage.setItem('user',this.email)
    }
    render(){
        return(
            <>
                <form action="/" onSubmit={this.submitHandler} style={{display:'flex',flexDirection:'column'}}>
                    <label htmlFor="fnmae">First Name</label>
                    <InputFields className="fnmae" type="text" placeholder="First Name" change={this.fnameChange}></InputFields>
                    <label htmlFor="lnmae">Last Name</label>
                    <InputFields className="lnmae" type="text" placeholder="Last Name" change={this.lnameChange}></InputFields>
                    <label htmlFor="email">Email</label>
                    <InputFields className="email" type="email" placeholder="Email Address" change={this.emailChange}></InputFields>
                    <label htmlFor="type">Type</label>
                    <select className="type"placeholder="Type" onChange={this.typeChange} style={{maxWidth:'400px',height:'28px',marginBottom:'10px'}}>
                       <option value="User">User</option>
                       <option value="Admin">Admin</option> 
                    </select>
                    <label htmlFor="num">Mobile Number</label>
                    <InputFields className="num" type="text" placeholder="Phone Number" change={this.numChange}></InputFields>
                    <label htmlFor="pass">Password</label>
                    <InputFields className="pass" type="password" placeholder="Password" change={this.passChange}></InputFields>
                    <label htmlFor="confirm">Password</label>
                    <InputFields className="confirm" type="password" placeholder="Confirm Password" change={this.confirmChange}></InputFields>
                    <button type="submit" style={{width:'400px',height:'28px'}} >Submit</button>
                </form>
            </>
        )
    }
}
export default Register;