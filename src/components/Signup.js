import '../css/Signup.css'
import { Link } from "react-router-dom";
import Home from './Home';
const Signup = () =>{
    
    
    return (<>
    <Link to={'/'}>
    <div id='back'>←</div>
    </Link>
    <div id="container">
        <div id="heading">
            <p>Create an MyChat Account</p>
        </div>
        <div id="forms">
            <form id='form'>
                <div id="names">
                    <div id="first">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder="First"/>
                    </div>
                    <div id="last">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Last"/>
                    </div>
                </div>
                <div id="mail">
                    <div id='mailc'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email"></input>
                    </div>
                </div>
                <div id="pass">
                    <div id="pre">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password"></input>
                    </div>
                    <div id="conf">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" id="confirm" placeholder="Confirm"></input>
                    </div>
                </div>
                <div id='button'>
                    <div id='buttonp'>
                        <button id='create'>Create Account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>)
}

export default Signup;