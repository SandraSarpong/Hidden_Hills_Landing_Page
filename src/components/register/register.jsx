import "./register.css"
import Logo from "./logo.jpg"
const Register= ()=> {

    return (
        <>
            <div className="wrapper">
                <div className="left-side1">
                    {/* <img src="./logo.jpg"  style={{width:"90px"}} alt="nice" /> */}
                   
                    <h2>Hidden Hills</h2>
                    <p>we are your preferred travel partners!</p>
                </div>
                <div className="right-side">
                <form action="post" method="POST">
                    <div className="form-control1"> 
                        <div className="top-side1">
                            <h2>Register</h2>
                            <p>create  account to get started</p>
                        </div>
                        <div className="middle-side">
                            <div className="form-item">
                                <label htmlFor="username" >Fullname</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username" >Email</label>
                                <input type="email" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username" >Username</label>
                                <input type="text" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username">password</label>
                                <input type="password" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username">Confirm password</label>
                                <input type="password" />
                            </div>
                        </div>
                        
                        <button className="btnLog" type="submit" >Submit</button>

                        <div className="footer-side">
                            <p>Already have account? <a href="/login">Login</a></p>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </>
    )

}

export default Register;