import adddevice_style from "./Adddevice.module.css"
import Listitem from '../../Listitem'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import star from '../../image/star.svg'
import {Link} from 'react-router-dom';
function Adddevice(){

    const optionsdevice = [
        'Chọn loại thiết bị','Kiosk ','Display counter'
    ];
    const sumitdevice =(e)=>{
        console.log(e.value)
    }
    const defaultOptiondevice = optionsdevice[0];
    return(
        <div className={adddevice_style.listdevice}>
        <Listitem/>
            <div className={adddevice_style.listlevelright}>
                <div className={adddevice_style.account}>
                    <div className={adddevice_style.accountinfo}>
                        <div className={adddevice_style.accountinfolist}>
                            <p className={adddevice_style.accounttitle}>
                                Thiết bị
                            </p>
                            <img src={Levelgoto} alt="levelgoto" className={adddevice_style.levelgoto}></img>
                            <Link to='/device'>
                            <p className={adddevice_style.accounttitle }>
                                Danh sách thiết bị
                            </p>
                            </Link>
                                <img src={Levelgoto} alt="levelgoto" className={adddevice_style.levelgoto}></img>
                            <p className={adddevice_style.accountlist }>
                                Thêm thiết bị
                            </p>
                        </div>
                        <div className={adddevice_style.bell}>
                            <Bellactive/>
                        </div>
                    </div>
                    <div className={adddevice_style.accountcontainer}>
                        <div className={adddevice_style.accountlisttitle}>
                            Quản lý thiết bị
                        </div>
                        <div className={adddevice_style.accountlistitem}>
                            <div className={adddevice_style.listitem}>
                                <div className={adddevice_style.accountlistinformation}>
                                    Thông tin thiết bị
                                </div>
                                <div className={adddevice_style.listinformation}>
                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Mã thiết bị:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet} type="text"  name="" placeholder="Nhập mã thiết bị"/>
                                    </div>

                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Loại thiết bị:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <div className={adddevice_style.accountdrow}>
                                            <Dropdown options={optionsdevice}  
                                            onChange={(e)=>sumitdevice(e)} 
                                            value={defaultOptiondevice} placeholder="Select an option" />
                                        </div>
                                    </div>


                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Tên thiết bị:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet} type="text"  name="" placeholder="Nhập tên thiết bị"/>
                                    </div>

                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Tên đăng nhập:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet} type="text"  name="" placeholder="Nhập tài khoản"/>
                                    </div>

                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}> Địa chỉ IP:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet} type="text"  name="" placeholder="Nhập địa chỉ IP"/>
                                    </div>

                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Mật khẩu:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet} type="text"  name="" placeholder="Nhập mật khẩu"/>
                                    </div>

                                    <div className={adddevice_style.accountname}>
                                        <p className={adddevice_style.accountid}>Dịch vụ sử dụng:
                                        <img src={star} alt='star' className={adddevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={adddevice_style.titlecontnet1} type="text"  name="" placeholder="Nhập mật khẩu"/>
                                    </div>
                                </div>

                                <div className={adddevice_style.accountnameitem}>
                                    <img src={star} alt='star' className={adddevice_style.star}></img>
                                    <p> Là trường thông tin bắt buộc</p>
                                </div>
                            </div>
                        </div>

                        <div className={adddevice_style.userbutton}>
                            <Link to ='/device'>
                            <div className={adddevice_style.cannel}>
                                <div className={adddevice_style.canneltitle}>Hủy bỏ  </div>
                            </div>
                            </Link>
                            <Link to='/device'>
                                <div className={adddevice_style.more}>
                                    <div className={adddevice_style.moretitle}>Thêm  </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Adddevice;