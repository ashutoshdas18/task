import React from "react";
import { Navigate } from "react-router-dom";

class Users extends React.Component{
    render(){
        if(!localStorage.getItem('user')){
            return(
                <Navigate to={'/login'}/>
            )
        }
        else if(!localStorage.getItem(localStorage.getItem('user')))
        {
            return(
                <Navigate to={'/login'}/>
            )
        }
        let localObject = JSON.parse(localStorage.getItem(localStorage.getItem('user')))

        if(localObject.type==='Admin'){
            let arr = [];
            for(let i in localStorage){
                if(i.split('@')[1])
                {
                    arr.push(i)
                }
            }
            let i=0;
            return(
                
                <div>
                    <h1>User List</h1>
                    {arr.map(e=>{
                        i++;
                        let curr = JSON.parse(localStorage.getItem(e))
                        return(
                            <div key={i}>
                                <p>{curr.fname + " "+curr.lname}</p>
                                <p>{curr.email}</p>
                                <p>{curr.number}</p>
                                <p>{curr.pass}</p>
                            </div>
                           
                        )
                    })}
                </div>
            )
        }
        else{
            return(
                <>
                <h1>Hi Welcome {localObject.fname}</h1>
                <h1>Name :{localObject.fname +" "+ localObject.lname}</h1>
                <h1>Email :{localObject.email}</h1>
                <h1>Mobile Number :{localObject.number}</h1>
                <h1>Employee Type :{localObject.type}</h1>
                </>
                
                
            )
        }
        
    }
}
export default Users