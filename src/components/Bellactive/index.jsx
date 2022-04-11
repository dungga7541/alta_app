import notification from "./Bellnotify.module.css"
import bell from "../image/bell.png"
import bellActive from "../image/bellActive.png"
import {useState} from "react"
import avata from "../image/avata.svg"
import {Link} from 'react-router-dom';
function Bellnotify(){
    const [showResult, setShowResult] = useState(false);
    return(
    <div className={notification.bellactive}>
        <p onClick={() => setShowResult(true)} > 
        <img src ={showResult ? bellActive : bell} ali="bell" className={notification.bell}></img> 
        </p>
        { showResult && <div className={notification.notify}
            onClick={()=>setShowResult(false)}>
                    <header className={notification.notifyheader}>
                        <p className={notification.notifytitle}>Thông báo </p>
                    </header>
                    <div className={notification.notifylist}>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Nguyễn Thị Thùy Dung</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Nguyễn Thiên Chinh</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Võ Thị Kim Liên</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Hoàng Nguyễn Quốc Huy</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Võ Ngọc Lan Anh</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                        <div className={notification.notifylink}>
                            <span> 
                                <p className={notification.name}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={notification.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </span>
                        </div>
                    </div>
            </div>
        }
        <Link to='/account'>
            <div className={notification.avata}>
                <img src={avata} alt="avata" ></img>
            </div>
        </Link>
        <Link to='/account'>
            <div className={notification.dashboaditemtitle}>
                <p className={notification.hello}>Xin chào </p>
                <p className={notification.nameaccount}>Lê Quỳnh Ái Vân </p>
            </div>
        </Link>
        
    </div>
    )
}

export default Bellnotify;