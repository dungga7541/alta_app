import detaildevice_style from "./Detaildevice.module.css"
import Listitem from "../../Listitem"
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../image/gotoright.svg";
import blue from '../../image/blue.svg'
import back from "../../image/back.svg"
import edit from "../../image/edit.png"
function Detaildevice() {
    return(
        
        <div className={detaildevice_style.detaildevice}>
            <Listitem/>
            <div className={detaildevice_style.listlevelright}>
                <div className={detaildevice_style.detail}>
                    <div className={detaildevice_style.info}>
                        <div className={detaildevice_style.infolist}>
                            <p className={detaildevice_style.title}>
                                Thiết bị 
                            </p>
                            
                            <img src={Levelgoto} alt="levelgoto" className={detaildevice_style.levelgoto}></img>
                            <Link to='/device'>
                                <p className={detaildevice_style.title}>
                                    Danh sách thiết bị
                                </p>
                            </Link>
                            <img src={Levelgoto} alt="levelgoto" className={detaildevice_style.levelgoto}></img>
                            <p className={detaildevice_style.detaillist }>
                                Chi tiết thiết bị
                            </p>
                        </div>
                        <div className={detaildevice_style.bell}>
                            <Bellactive/>
                        </div>
                    </div>
                <div className={detaildevice_style.container}>
                        <div className={detaildevice_style.listtitle}>
                            Quản lý thiết bị
                        </div>
                        <div className={detaildevice_style.newitem}>
                            <div className={detaildevice_style.informationlevel}>
                                Thông tin thiết bị
                            </div>
                            <div className={detaildevice_style.listitem}>
                                <div className={detaildevice_style.id}>Mã thiết bị:</div>
                                <div className={detaildevice_style.name}>KIO_01</div>
                                <div className={detaildevice_style.adress}>Loại thiết bị:</div>
                                <div className={detaildevice_style.source}>Kiosk</div>

                                <div className={detaildevice_style.id}>Tên thiết bị:</div>
                                <div className={detaildevice_style.name}>Kiosk</div>
                                <div className={detaildevice_style.adress}>Tên đăng nhập:</div>
                                <div className={detaildevice_style.source}>
                                    
                                    Linhkyo011</div>

                                <div className={detaildevice_style.id}>Địa chỉ IP:</div>
                                <div className={detaildevice_style.name}>128.172.308</div>
                                <div className={detaildevice_style.adress}>Mật khẩu:</div>
                                <div className={detaildevice_style.source}>CMS</div>

                                <div className={detaildevice_style.id}>Dịch vụ sử dụng:</div>
                                
                            </div>
                            <div className={detaildevice_style.source1}>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</div>
                        </div> 
                        <Link to ="/device">
                            <div className={detaildevice_style.add}>
                                    <div className={detaildevice_style.addback}>
                                        <img src={edit} alt="" />  
                                    </div>
                                    <span className={detaildevice_style.edittitle}>Cập nhật thiết bị</span>
                            </div>
                        </Link>
                    </div>       
                </div>    
            </div>
        </div>
    )
}


export default Detaildevice;