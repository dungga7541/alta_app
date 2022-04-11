import listservice from './Listserivce.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../image/gotoright.svg";
import {useState} from 'react'
function Listserivce(){
    const [codeService , setCodeService] = useState('201')
    const [nameService , setNameService] = useState('Khám tim mạch')
    const [desService , setDesService] = useState('')
    return(
        <div className={listservice.account}>
            <div className={listservice.accountinfo}>
                <div className={listservice.accountinfolist}>
                    <p className={listservice.accounttitle}>
                        Thiết bị
                    </p>
                        <img src={Levelgoto} alt="levelgoto" className={listservice.levelgoto}></img>
                    <Link to='/service'>
                        <p className={listservice.accounttitle }>
                            Danh sách dịch vụ
                        </p>
                    </Link>
                        <img src={Levelgoto} alt="levelgoto" className={listservice.levelgoto}></img>
                    <p className={listservice.accountlist }>
                        Thêm dịch vụ
                    </p>
                </div>
                <div className={listservice.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={listservice.accountcontainer}>
                <div className={listservice.accountlisttitle}>
                    Quản lý dịch vụ
                </div>
                <div className={listservice.addaccount}>
                    <div className={listservice.addaccounttitle}>
                        Thông tin dịch vụ
                    </div>
                    <div className={listservice.contaniner__input}>
                        <div className={listservice.contaniner__input1}>
                            <div className={listservice.serviceCode}>
                                <div className={listservice.serviceCodetitle}>
                                    Mã dịch vụ: <span>*</span>
                                </div>
                                <div className={listservice.serviceCodeinput}>
                                    <input type="text" value={codeService} onChange={ e=> setCodeService(e.target.value)}  />
                                </div>
                            </div>
                            <div className={listservice.serviceCode}>
                                <div className={listservice.serviceCodetitle}>
                                    Tên dịch vụ: <span>*</span>
                                </div>
                                <div className={listservice.serviceCodeinput}>
                                    <input type="text" value={nameService} onChange={ e=> setNameService(e.target.value)}  />
                                </div>
                            </div>       
                        </div>
                        <div className={listservice.serviceCode}>
                                <div className={listservice.serviceCodetitle}>
                                    Mô tả: <span>*</span>
                                </div>
                                <div className={listservice.serviceCodeinput}>
                                    <textarea rows={4} cols={50} placeholder="Mô tả dịch vụ" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                </div>
                        </div>
                    </div>
                    <div className={listservice.contaniner__rules}>
                        <div className={listservice.contaniner__rules__title}>
                                Quy tắc cấp số
                        </div>
                        <div className={listservice.contaniner__checkbox}>
                            <div className={listservice.contaniner__checkbox__items}>
                                <div className={listservice.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Tăng tự động từ:</span>
                                </div> 
                                <div className={listservice.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Prefix:</span>
                                </div>   
                                <div className={listservice.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Surfix:</span>
                                </div>   
                                <div className={listservice.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Reset mỗi ngày</span>
                                </div>   
                            </div>
                                <div className={listservice.contaniner__input__items}>
                                <div className={listservice.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>
                                    <span>đến</span>
                                    <input type="text" value='9999' onChange={ e=>'value'}/>
                                </div>
                                <div className={listservice.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                                
                                <div className={listservice.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={listservice.contaniner__more}>
                        <div className={listservice.contaniner__more__title}>
                            <p className={listservice.star}>*</p> <span className={listservice.contaniner__more__require}>Là trường thông tin bắt buộc</span> 
                        </div>
                    </div>
                </div>
                
                <div className={listservice.contaniner__button}>
                    <div className={listservice.contaniner__cancel}>
                    <Link to="/service"><button>Hủy bỏ</button></Link>
                    </div>
                    <div className={listservice.contaniner__addservice}>
                    <Link to="/service"><button>Thêm dịch vụ</button></Link>
                    </div>
                </div>
                
            </div>
                
        </div>
    )
}

export default Listserivce;