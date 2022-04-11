import resetpass from "./Resetpass.module.css"
import alta from "../../image/alta.png"
import pic5 from  "../../image/pic5.png"
import pic6 from  "../../image/pic6.png"
import pic8 from  "../../image/pic8.png"
import eyeclose from "../../image/eyeclose.svg"
import { useState } from "react";

import { Link } from "react-router-dom"
const Login =()=>{
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const [rspasswordShown, setrsPasswordShown] = useState(false);
    const togglePassword1 = () => {
        setrsPasswordShown(!rspasswordShown);
    };
    return(
        <div className={resetpass.resetpassword}>
            <div className={resetpass.left}>   
                <img src={alta} alt='pic1'className={resetpass.alta}></img>   
                <h4>Đặt lại mật khẩu mới </h4>
                <div className={resetpass.form}>
                    <div className={resetpass.password}>Mật khẩu  </div>
                    <input  type={passwordShown ? "text" : "password"}className={resetpass.title} name="" placeholder="*****"/>
                    <img src={eyeclose}  onClick={togglePassword1} alt='eyeclose'className={resetpass.eyeclose}  ></img>
                    
                    <div className={resetpass.enterpassword}>Nhập lại mật khẩu  </div>
                    <input type={passwordShown ? "text" : "password"} className={resetpass.title} name="" placeholder="****"/>
                    <img src={eyeclose} onClick={togglePassword}  alt='eyeclose'className={resetpass.eyeclosepass}></img>
                </div>
                < Link to='/'>
                    <div className={resetpass.sumit} > 
                        <p className={resetpass.confirm}>Xác nhận</p>
                    </div>
                </Link>
            </div>
            <div className={resetpass.right}>
                <img src={pic5} alt='pic5' className={resetpass.pic5}></img>
                <img src={pic8} alt='pic8'className={resetpass.pic8} ></img>
                <img src={pic6} alt='pic6'className={resetpass.pic6} ></img>
            </div>
        </div>
    )
}

export default Login;