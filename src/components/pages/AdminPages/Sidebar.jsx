import "./sidebar.css"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";
import { auth} from "../../../firebase/firebase"
import {signOut } from "firebase/auth";
import { useEffect } from "react";

const Sidebar = () => {

  const navigate = useNavigate()

    useEffect(()=> {
        
setTimeout(() => {
    const user = auth.currentUser;
    if(!user){
        navigate("/login")
    }

},1000)
       
    },[navigate])

 const signOutHandle = () => {
    signOut(auth).then(() => {

        alert('you are sign out')
        // Sign-out successful.
        navigate("/login")
      }).catch((error) => {
        // An error happened.
      });}

  return (
    <div className="admin-bar">

        
        <div className="center">
            <ul className="list">
                
                
                <li> <Link to="/reguser" activeClassName="active">Reg Users</Link></li>
                <li><Link to="/addslide" activeClassName="active">Slide Section</Link></li>
                <li><Link to="/adddownload" activeClassName="active">Download Section</Link></li>
                <li><Link to="/addevent" activeClassName="active">Event Section </Link></li>
                <li><button className="logout-btn" onClick={signOutHandle}>Log out</button></li>
            </ul>
        </div>

    </div>
  )
}

export default Sidebar

