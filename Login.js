import React from 'react'
import { useHistory } from 'react-router-dom'; 


export default function Login() {

    let history=useHistory();
    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" className="font-control"/>
            <br/><br/>
                <input type="text" placeholder="password" className="font-control"/>
            <br></br><br></br>
               <button
                onClick={()=>{
                    history.push('/UserComponent');
                 }}
                  className="btn btn-primary">Login</button>
            </div>

        </div>
    )
}