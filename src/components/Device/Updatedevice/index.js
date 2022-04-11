import updatedevice_style from "./Updatedevice.module.css"
import Listitem from '../../Listitem'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import delefi from '../../image/delefi.svg'
import star from '../../image/star.svg'
import {Link} from 'react-router-dom';
function Updatedevice(){

    const optionsdevice = [
        'Chọn loại thiết bị','Kiosk ','Display counter'
    ];
    const sumitdevice =(e)=>{
        console.log(e.value)
    }
    const defaultOptiondevice = optionsdevice[0];
    return(
        <div className={updatedevice_style.listdevice}>
        <Listitem/>
            <div className={updatedevice_style.listlevelright}>
                <div className={updatedevice_style.update}>
                    <div className={updatedevice_style.updateinfo}>
                        <div className={updatedevice_style.updateinfolist}>
                            <p className={updatedevice_style.updatetitle}>
                                Thiết bị
                            </p>
                            <img src={Levelgoto} alt="levelgoto" className={updatedevice_style.levelgoto}></img>
                            <Link to='/device'>
                            <p className={updatedevice_style.updatetitle }>
                                Danh sách thiết bị
                            </p>
                            </Link>
                                <img src={Levelgoto} alt="levelgoto" className={updatedevice_style.levelgoto}></img>
                            <p className={updatedevice_style.updatelist }>
                                Cập nhật thiết bị
                            </p>
                        </div>
                        <div className={updatedevice_style.bell}>
                            <Bellactive/>
                        </div>
                    </div>

                    <div className={updatedevice_style.updatecontainer}>
                        <div className={updatedevice_style.updatelisttitle}>
                            Quản lý thiết bị
                        </div>
                        <div className={updatedevice_style.updatelistitem}>
                            <div className={updatedevice_style.listitem}>
                                <div className={updatedevice_style.updatelistinformation}>
                                    Thông tin thiết bị
                                </div>
                                <div className={updatedevice_style.listinformation}>
                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Mã thiết bị:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={updatedevice_style.titlecontnet} type="text"  name="" placeholder="KIO_01"/>
                                    </div>

                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Loại thiết bị:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        <div className={updatedevice_style.updatedrow}>
                                            <Dropdown options={optionsdevice}  
                                            onChange={(e)=>sumitdevice(e)} 
                                            value={defaultOptiondevice} placeholder="Select an option" />
                                        </div>
                                    </div>
                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Tên thiết bị:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={updatedevice_style.titlecontnet} type="text"  name="" placeholder="Kiosk"/>
                                    </div>

                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Tên đăng nhập:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={updatedevice_style.titlecontnet} type="text"  name="" placeholder="Linhkyo011"/>
                                    </div>

                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}> Địa chỉ IP:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={updatedevice_style.titlecontnet} type="text"  name="" placeholder="128.172.308"/>
                                    </div>

                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Mật khẩu:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                        
                                        <input className={updatedevice_style.titlecontnet} type="text"  name="" placeholder="CMS"/>
                                    </div>

                                    <div className={updatedevice_style.updatename}>
                                        <p className={updatedevice_style.updateid}>Dịch vụ sử dụng:
                                        <img src={star} alt='star' className={updatedevice_style.starid}></img>
                                        </p>
                                    <div className={updatedevice_style.list}>
                                            <div className={updatedevice_style.item}>
                                            <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám tim mạch
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>
                                            <div className={updatedevice_style.item}>
                                            <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám sản phụ khoa
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>
                                            <div className={updatedevice_style.item}>
                                            <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám răng hàm mặt
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>
                                            <div className={updatedevice_style.item}>
                                            <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám tai mũi họng
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>
                                            <div className={updatedevice_style.item}>
                                            <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám hô hấp
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>

                                            <div className={updatedevice_style.item}>
                                                <p className={updatedevice_style.updatetitle__item}>
                                                
                                                    Khám tổng quát
                                                </p>
                                                <img src={delefi} alt='star' className={updatedevice_style.delefi}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={updatedevice_style.updatenameitem}>
                                    <img src={star} alt='star' className={updatedevice_style.star}></img>
                                    <p> Là trường thông tin bắt buộc</p>
                            </div>
                        </div>
                        <div className={updatedevice_style.userbutton}>
                            <Link to ='/device'>
                            <div className={updatedevice_style.cannel}>
                                <div className={updatedevice_style.canneltitle}>Hủy bỏ</div>
                            </div>
                            </Link>
                            <Link to='/device'>
                                <div className={updatedevice_style.more}>
                                    <div className={updatedevice_style.moretitle}>Cập nhật</div>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Updatedevice;