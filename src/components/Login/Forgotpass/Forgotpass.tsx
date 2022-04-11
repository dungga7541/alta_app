import forgotpass from "./Forgotpass.module.css"
import alta from "../../image/alta.png"
import Frame from  "../../image/Frame.png"
import { Link } from "react-router-dom"
const Forgotpass =()=>{
    return(
        <div className={forgotpass.login}>
            <div className={forgotpass.left}>
                <img src={alta} alt='pic1'className={forgotpass.alta} ></img>     
                    <div className={forgotpass.pass}>
                        <p className={forgotpass.passtitle}>Đặt lại mật khẩu </p>
                    </div>
                    <div className={forgotpass.email}>
                        <p className={forgotpass.emailtitle}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                    </div>
                    
                    <input type="text" className={forgotpass.title} name="" placeholder=" "/>
                    <Link to='/'>
                        <div className={forgotpass.sumitleft} >
                            <p className={forgotpass.cancel} >Hủy</p>
                        </div>
                    </Link>
                    <Link to ="/wrong/forgot/reset">
                        <div className={forgotpass.sumitright}> 
                            <p className={forgotpass.next} >tiếp tục </p>
                        </div>
                    </Link>
            </div>
            <div className={forgotpass.right}>
                <img src={Frame} alt='frame' className={forgotpass.frame}></img>
            </div>
        </div>
    )
}
export default Forgotpass;