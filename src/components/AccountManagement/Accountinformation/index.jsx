import infoaccount from './Accountinformation.module.css'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import star from '../../image/star.svg'
import eyeclose from '../../image/eyeclose.svg'
function AddAccount(){
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
    const defaultOptionstatus = optionsstatus[0];
    return(
    <div className={infoaccount.account}>
        <div className={infoaccount.accountinfo}>
            <div className={infoaccount.accountinfolist}>
                <p className={infoaccount.accounttitle}>
                    Cài đặt hệ thống
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={infoaccount.levelgoto}></img>
                <Link to ='/dashboard/AccountManagement'>
                    <p className={infoaccount.accounttitle }>
                        Quản lý tài khoản
                    </p>
                </Link>
                <img src={Levelgoto} alt="levelgoto" className={infoaccount.levelgoto}></img>
                <p className={infoaccount.accountlist }>
                    Thêm tài khoản
                </p>
            </div>
            <div className={infoaccount.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={infoaccount.accountcontainer}>
            <div className={infoaccount.accountlisttitle}>
                Quản lý tài khoản
            </div>
            <div className={infoaccount.accountlistitem}>
                <div className={infoaccount.listitem}>
                    <div className={infoaccount.accountlistinformation}>
                        Thông tin tài khoản
                    </div>
                    <div className={infoaccount.listinformation}>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Họ tên
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="text" placeholder="Nhập họ tên"/>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Tên đăng nhập:
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="text"  placeholder="Nhập tên đăng nhập"/>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Số điện thoại
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="text"  placeholder="Nhập số điện thoại"/>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Mật khẩu:
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="password"  placeholder="******"/>
                            <img src={eyeclose} alt='star' className={infoaccount.eyeclosepass}></img>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Email
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="text"  placeholder="Nhập email"/>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Nhập lại mật khẩu
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <input className={infoaccount.titlecontent} type="password"  placeholder="******"/>
                            <img src={eyeclose} alt='star' className={infoaccount.eyeclosenewpass}></img>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Vai trò
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <div className={infoaccount.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                    onChange={(e)=>sumitaccount(e)} 
                                    value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={infoaccount.accountname}>
                            <p className={infoaccount.accountid}>Tình trạng
                            <img src={star} alt='star' className={infoaccount.starid}></img>
                            </p>
                            <div className={infoaccount.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                    onChange={(e)=>sumitaccount(e)} 
                                    value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={infoaccount.accountnameitem}>
                            <img src={star} alt='star' className={infoaccount.star}></img>
                            <p> Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                </div>   
            </div>
            <div className={infoaccount.userbutton}>
                <Link to ='/dashboard/AccountManagement'>
                    <div className={infoaccount.cannel}>
                        <div className={infoaccount.canneltitle}>Hủy bỏ  </div>
                    </div>
                </Link>
                <Link to ='/dashboard/AccountManagement'>
                    <div className={infoaccount.more}>
                        <div className={infoaccount.moretitle}>Thêm  </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default AddAccount;