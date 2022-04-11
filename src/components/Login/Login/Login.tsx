import login from "./Login.module.css"
import alta from "../../image/alta.png"
import pic5 from  "../../image/pic5.png"
import pic6 from  "../../image/pic6.png"
import pic7 from  "../../image/pic7.png"
import pic8 from  "../../image/pic8.png"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Login =()=>{
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return(
        
        <div className={login.login}>
            <div className={login.left}>   
                <img src={alta} alt='pic1'className={login.alta} ></img>     
                    <div className={login.login1}>
                        <div className={login.name}>Tên đăng nhập * </div>
                        <input type="text" className={login.title} name="" placeholder="lequynhavan01"/>
                        
                        <div className={login.password}>Mật khẩu * </div>
                        <input type={passwordShown ? "text" : "password"}  className={login.title} name="" placeholder="********"/>
                        <img src={pic7} alt='eye' onClick={togglePassword} className={login.eye}  ></img>
                        <Link to = "/wrong/forgot"><div className={login.password1}>Quên mật khẩu? </div></Link>
                        
                    </div>
                    <Link to="/dashboard">
                        <div className={login.sumit} > 
                            <p className={login.log__in} >Đăng nhập</p>
                        </div>
                    </Link>
            </div>
            <div className={login.right}>
                    <img src={pic5} alt='pic5' className={login.pic5}></img>
                    <img src={pic8} alt='pic8'className={login.pic8} ></img>
                    <img src={pic6} alt='pic6'className={login.pic6} ></img>
            </div>
        </div>
    )
}

export default Login;