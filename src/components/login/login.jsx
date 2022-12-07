import { Button, Form, Input } from "antd";
import "./login.css"
const Login= ()=> {

    return (
        <>
            <div className="wrapper">
                <div className="left-side">
                    <h2>Hidden Hills</h2>
                    <p>we are your preferred travel partners!</p>
                </div>
                <div className="right-side">
                <form action="post" method="POST">
                    <div className="form-control"> 
                        <div className="top-side">
                            <h2>Login</h2>
                            <p>welcome back! we've miss you here</p>
                        </div>
                        <div className="middle-side">
                            <div className="form-item">
                                <label htmlFor="username" >Username</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username">password</label>
                                <input type="password" />
                            </div>
                        </div>
                        
                        <button className="btnLog" type="submit" >Login</button>

                        <div className="footer-side">
                            <p>Don't have account? <a href="/register">Register</a></p>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </>
    )

}

export default Login;