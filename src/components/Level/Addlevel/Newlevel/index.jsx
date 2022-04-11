import newlevel from "./Newlevel.module.css"
import Bellactive from "../../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import  {useState} from 'react';
function Newlevel() {
    const optionservice = [
        'Chọn dịch vụ', 'Khám tim mạch', 'Khám sản - Phụ khoa','Khám răng hàm mặt','Khám tai mũi họng'
    ];
    const sumitservice =(e)=>{
        console.log(e.value)
    }
    const defaultOptionservice = optionservice[0];
    const [isShow, setIsShow] = useState(false);
    return(
        <div className={newlevel.level}>
            <div className={newlevel.levelinfo}>
                <div className={newlevel.levelinfolist}>
                    <p className={newlevel.leveltitle}>
                        Cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={newlevel.levelgoto}></img>
                    <p className={newlevel.leveltitle}>
                        Danh sách cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={newlevel.levelgoto}></img>
                    <p className={newlevel.levellist }>
                        Cấp số mới
                    </p>
                </div>
                <div className={newlevel.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={newlevel.levelcontainer}>
                <div className={newlevel.levellisttitle}>
                    Quản lý cấp số
                </div>
                <div className={newlevel.Newlevelitem}>
                    <div className={newlevel.list}>
                        <p className={newlevel.levelnew}>CẤP SỐ MỚI</p>
                        <p className={newlevel.service} >Dịch vụ khách hàng lựa chọn</p>
                        <div className={newlevel.leveldrow}>
                            <Dropdown options={optionservice} 
                                className={newlevel.chartDropdown}
                                        onChange={(e)=>sumitservice(e)} 
                                        value={defaultOptionservice} placeholder="Select an option" />
                        </div>     
                        <div className={newlevel.button}>
                        <Link to='/level'>
                            <div className={newlevel.cannel}>
                                <div className={newlevel.canneltitle}>Hủy bỏ  </div>
                            </div>
                        </Link>    
                        {/* <Link to= '/level/service'> */}
                            <div  className={newlevel.print} onClick={()=>setIsShow(true)} >
                                <div className={newlevel.printtitle}>In số </div>
                                { isShow &&  <div className={newlevel.modal}>
                                        <div className={newlevel.modal__item}>
                                            <Link to ="/level/">
                                            <div className={newlevel.modal__item_close}>
                                                    &times;
                                            </div>
                                            </Link>
                                            <div className={newlevel.modal__item_title}>Số thứ tự được cấp</div>
                                            <div className={newlevel.modal__item_number}>2001201</div>
                                            <div className={newlevel.modal__item_des}>DV: Khám răng hàm mặt <span>(tại quầy số 1)</span></div>
                                            <div className={newlevel.modal__item_footer}>s
                                                <div className={newlevel.modal__item_footer__item}>
                                                    <span>Thời gian cấp:</span>
                                                    <span>09:30 11/10/2021</span>
                                                </div>
                                                <div className={newlevel.modal__item_footer__item}>
                                                    <span>Thời gian cấp:</span>
                                                    <span>09:30 11/10/2021</span>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                    }    </div>
                        {/* </Link> */}
                        </div>
                    </div>
                </div>
            
            </div>    
            
        </div>
    )
}


export default Newlevel;