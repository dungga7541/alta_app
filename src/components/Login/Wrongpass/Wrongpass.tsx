import wrongpass from "./Wrongpass.module.css"
import alta from "../../image/alta.png"
import pic5 from  "../../image/pic5.png"
import pic6 from  "../../image/pic6.png"
import pic7 from  "../../image/pic7.png"
import pic8 from  "../../image/pic8.png"
import {Link} from 'react-router-dom';
import warning from '../../image/warning.svg'
const Wrongpass =()=>{
    return(
        <div className={wrongpass.wrongpassword}>
            <div className={wrongpass.left}>
            <img src={alta} alt='pic1'className={wrongpass.alta} ></img>     
                <div className={wrongpass.form}>
                    <div className={wrongpass.username}>Tên đăng nhập * </div>
                    <input type="text" className={wrongpass.title} placeholder="Aivan288"/>
                    <div className={wrongpass.password}>Mật khẩu * </div>
                    <input type="password"  className={wrongpass.title} placeholder="******"/>
                    <img src={pic7}  alt='eye'className={wrongpass.eye}></img>
                    <div className={wrongpass.wrongpass}>
                        <img src={warning} alt="warning" className={wrongpass.warning}></img>
                        <p className={wrongpass.wrongpasstitle}>Sai mật khẩu hoặc tên đăng nhập </p> 
                    </div>
                </div>
                    <Link to="/wrong/forgot">
                        <div className={wrongpass.sumit}> 
                            <p className={wrongpass.login}>Đăng nhập</p>
                        </div>
                    </Link>
                    <Link to="/wrong/forgot"><div className={wrongpass.forgotpass}>Quên mật khẩu? </div></Link>
            </div>
            <div className={wrongpass.right}>
                <img src={pic5} alt='pic5' className={wrongpass.pic5}></img>
                <img src={pic8} alt='pic8' className={wrongpass.pic8}></img>
                <img src={pic6} alt='pic6' className={wrongpass.pic6}></img>
            </div>
        </div>
    )
}
export default Wrongpass;
