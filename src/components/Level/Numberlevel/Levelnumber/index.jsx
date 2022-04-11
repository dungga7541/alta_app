import numberlevel from "./Levelnumber.module.css"
import Bellactive from "../../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Levelnumber(){

        const optionservice = [
            'Chọn dịch vụ', 'Khám tim mạch', 'Khám sản - Phụ khoa','Khám răng hàm mặt','Khám tai mũi họng'
        ];
        const sumitservice =(e)=>{
            console.log(e.value)
        }
        const defaultOptionservice = optionservice[0];
    
        
    return(
        <div className={numberlevel.level}>
        <div className={numberlevel.levelinfo}>
            <div className={numberlevel.levelinfolist}>
                <p className={numberlevel.leveltitle}>
                    Cấp số
                </p>
                
                <img src={Levelgoto} alt="levelgoto" className={numberlevel.levelgoto}></img>
        
                <p className={numberlevel.leveltitle}>
                    Danh sách cấp số
                </p>
                <img src={Levelgoto} alt="levelgoto" className={numberlevel.levelgoto}></img>
                <p className={numberlevel.levellist }>
                    Cấp số mới
                </p>
            </div>
            <div className={numberlevel.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={numberlevel.levelcontainer}>
            <div className={numberlevel.levellisttitle}>
                Quản lý cấp số
            </div>
            <div className={numberlevel.Newlevelitem}>
                <div className={numberlevel.list}>
                    <p className={numberlevel.levelnew}>CẤP SỐ MỚI</p>
                    <p className={numberlevel.service} >Dịch vụ khách hàng lựa chọn</p>
                    <div className={numberlevel.leveldrow}>
                        <Dropdown options={optionservice} 
                            className={numberlevel.chartDropdown}
                                    onChange={(e)=>sumitservice(e)} 
                                    value={defaultOptionservice} placeholder="Select an option" />
                    </div>     
                    <div className={numberlevel.button}>
                        <Link to='./level'>
                        <div className={numberlevel.cannel}>
                            <div className={numberlevel.canneltitle}>Hủy bỏ  </div>
                        </div>
                        </Link>
                        <div  className={numberlevel.print}>
                            <div className={numberlevel.printtitle}>In số </div>
                            {/* <div className={numberlevel.propprint}>
                                <label className={numberlevel.dele}>
                                    <img src={dele} alt="dele" ></img>
                                </label>
                                <dlv className={numberlevel.propkey}>
                                    <div className={numberlevel.number}>Số thứ tự được cấp</div>
                                    <div className={numberlevel.id}>2001201</div>
                                    <div className={numberlevel.DV}>DV: Khám răng hàm mặt (tại quầy số 1)</div>
                                </dlv>
                                <div className={numberlevel.propprintbottom}>
                                    <div className={numberlevel.time}>Thời gian cấp: 09:30 11/10/2021 </div>
                                    <div className={numberlevel.user}>Hạn sử dụng: 17:30 11/10/2021 </div>
                                </div>
                            </div> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </div>    
        
    </div>
    )
}

export default Levelnumber;