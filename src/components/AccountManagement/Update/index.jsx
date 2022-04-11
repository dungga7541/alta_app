import updateaccount from './Update.module.css'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import star from '../../image/star.svg'

import eyeopen from '../../image/eyeopen.svg'
function Update(){
    const optionsaccount = [
        'Chọn vai trò','kế toán ','Quản lý ','Admin '
    ];
    const sumitaccount =(e)=>{
        console.log(e.value)
    }
    const defaultOptionaccount = optionsaccount[0];

    const optionsstatus = [
    'Hoạt động','kế toán ','Ngưng hoạt động ','Tất cả '
    ];
    const sumitstatus =(e)=>{
        console.log(e.value)
    }
    const defaultOptionstatus = optionsstatus[0];
    return(
    <div className={updateaccount.account}>
        <div className={updateaccount.accountinfo}>
            <div className={updateaccount.accountinfolist}>
                <p className={updateaccount.accounttitle}>
                    Cài đặt hệ thống
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={updateaccount.levelgoto}></img>
                <p className={updateaccount.accounttitle }>
                    Quản lý tài khoản
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={updateaccount.levelgoto}></img>
                <p className={updateaccount.accountlist }>
                    Cập nhật tài khoản
                </p>
            </div>
            <div className={updateaccount.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={updateaccount.accountcontainer}>
            <div className={updateaccount.accountlisttitle}>
                Quản lý tài khoản
            </div>
            <div className={updateaccount.accountlistitem}>
                <div className={updateaccount.listitem}>
                    <div className={updateaccount.accountlistinformation}>
                        Thông tin tài khoản
                    </div>
                    <div className={updateaccount.listinformation}>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Họ tên
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            
                            <input className={updateaccount.titlecontnet} type="text"  name="" placeholder="Nguyen Van A"/>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Tên đăng nhập:
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <input className={updateaccount.titlecontnet} type="text"  name="" placeholder="tuyetnguyen123"/>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Số điện thoại
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <input className={updateaccount.titlecontnet} type="text"  name="" placeholder="0902345678"/>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Mật khẩu:
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <input className={updateaccount.titlecontnet} type="password"  name="" placeholder="Tuyetnguyen12"/>
                            <img src={eyeopen} alt='star' className={updateaccount.eyeopenpass}></img>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Email
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <input className={updateaccount.titlecontnet} type="text"  name="" placeholder="NguyenA154@gmail.com"/>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Nhập lại mật khẩu
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <input className={updateaccount.titlecontnet} type="password"  name="" placeholder="Tuyetnguyen12"/>
                            <img src={eyeopen} alt='star' className={updateaccount.eyeopennewpass}></img>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Vai trò
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <div className={updateaccount.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                        onChange={(e)=>sumitaccount(e)} 
                                        value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={updateaccount.accountname}>
                            <p className={updateaccount.accountid}>Tình trạng
                            <img src={star} alt='star' className={updateaccount.starid}></img>
                            </p>
                            <div className={updateaccount.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                        onChange={(e)=>sumitaccount(e)} 
                                        value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={updateaccount.accountnameitem}>
                            <img src={star} alt='star' className={updateaccount.star}></img>
                            <p> Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                </div>   
            </div>
            <div className={updateaccount.userbutton}>
            <Link to ='/dashboard/AccountManagement'>
            <button className={updateaccount.cannel}>
                <a className={updateaccount.canneltitle}>Hủy bỏ</a>
            </button>
            </Link>
            <Link to ='/dashboard/AccountManagement'>
                <button className={updateaccount.more}>
                    <a className={updateaccount.moretitle}>Cập nhật</a>
                </button>
            </Link>
            </div>
        </div>
    </div>
    )
}

export default Update;