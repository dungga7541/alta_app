import detailservice from "./Detailservice.module.css"
import Listitem from '../../Listitem'
import Bellactive from "../../Bellactive";
import Page from "../../Page";
import { useState,useEffect } from "react";
import levelgoto from "../../image/gotoright.svg";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import fi_search from"../../image/fi_search.svg"
import goright from "../../image/goright.svg"
import { connect } from "react-redux";
import '../../style/detailservice.css';
import green from "../../image/green.svg"
import blue from "../../image/blue.svg"
import black from "../../image/black.svg"
import {Link} from 'react-router-dom';
import edit from "../../image/Edit.svg"
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import back1 from'../../image/back1.svg'
function Detailservice({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData();
    }, []);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [search , setSearch] = useState('')
    const ServiceWaitPoint = ()=>{
        return (
                <><span className="green">
                <img src={green} alt="green"></img>
                </span><span>Đã hoàn thành</span></>
        )
    } 
        const ServiceUsedPoint = ()=>{
        return (
                <><span className="blue">
                    <img src={blue} alt="blue" ></img>
                    
                </span><span>Đang thực hiện</span></>
        )
        }  
        const ServiceUnactivePoint = ()=>{
            return (  <><span className="black">
            <img src={black} alt="black"></img>
            </span><span>Vắng</span></>
            ) 
    }
    const data= dataTable.dateServiceDetail
    const [dataServiceTable , setDataServiceTable] = useState(data)
    const options = [
        'Tất cả', 'Đã hoàn thành', 'Đang thực hiện','Vắng'
    ];
const defaultOption = options[0];
        const handleDropdownValue = (e: any)=>{
            if(e.value=='Đã hoàn thành'){
                    const filterdata = data  .filter( (item:any)=> item.status == 'Đã hoàn thành')
                    setDataServiceTable(filterdata)
            }else if(e.value=='Đang thực hiện') {
                    const filterdata = data  .filter((item:any) =>item.status == 'Đang thực hiện')
                    setDataServiceTable(filterdata)
            }else if(e.value=='Vắng') {
                const filterdata = data.filter((item:any) => item.status == 'Vắng')
                setDataServiceTable(filterdata)
                }
            else{
                setDataServiceTable(data  )
            }
        }
    return(
        <div className={detailservice.listservice}>
            {/* <Listitem/> */}
        <div className={detailservice.listlevelright}>
            <div className={detailservice.service}>
                <div className={detailservice.serviceinfo}>
                    <div className={detailservice.serviceinfolist}>
                        <p className={detailservice.servicetitle}>
                            Dịch vụ
                        </p>
                            <img src={levelgoto} alt="levelgoto" className={detailservice.servicegoto}></img>
                    
                        <p className={detailservice.servicetitle }>
                            Danh sách dịch vụ
                        </p>
                        <img src={levelgoto} alt="levelgoto" className={detailservice.servicegoto}></img>
                            <p className={detailservice.servicelist }>
                            Chi tiết
                            </p>
                    </div>
                    <div className={detailservice.bell}>
                        <Bellactive/>
                    </div>
                </div>
                <div className={detailservice.detailtitle}>
                    Quản lý dịch vụ
                </div>
                <div className={detailservice.detail__container}>
                    <div className={detailservice.detail__container__items}>
                        <div className={detailservice.detail__item}>
                            <div className={detailservice.detail__title}>
                                Thông tin dịch vụ
                            </div>
                            <div className={detailservice.detail__items}>
                                <div className={detailservice.title}>Mã dịch vụ: </div>
                                <div className={detailservice.titlelist}>201</div>
                            </div>
                            <div className={detailservice.detail__items}>
                                <div className={detailservice.title}>Tên dịch vụ: </div>
                                <div className={detailservice.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                            <div className={detailservice.detail__items}>
                                <div className={detailservice.title}>Mô tả:</div>
                                <div className={detailservice.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                        </div>
                        <div className={detailservice.detail__item}>
                            <div className={detailservice.detail__title} style={{marginTop:"13px"}}>
                                Quy tắc cấp số
                            </div>
                            <div className={detailservice.detail__items}>
                                <div className={detailservice.title}>Tăng tự động:  </div>
                                <div className={detailservice.items__inputs}>
                                    <input type="text" onChange={ e=>'value'} value='0001' />
                                    <span className={detailservice.next}>đến</span> 
                                    <input type="text" onChange={ e=>'value'}  value='9999'  />
                                </div>
                            </div>
                            <div className={detailservice.detail__items}>
                                <div className={detailservice.title}>Prefix:</div>
                                <div className={detailservice.items__inputs}> 
                                    <input type="text" className='prefix'  value='0001' onChange={ e=>'value'} />
                                </div>
                            </div>
                            <div className={detailservice.detail__items1}>
                                Reset mỗi ngày
                            </div>
                            <div className={detailservice.example}>
                                Ví dụ: 201-2001
                            </div>
                        </div>
                    </div>
                    <div className={detailservice.detail__container__table}>
                    <div className={detailservice.servicedropdown}>
                            <div className={detailservice.levelitem}>
                                    <div className={detailservice.levelname}>Trạng thái</div>
                                    <div className={detailservice.leveldrow}>
                                    <Dropdown options={options} 
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                        
                                    </div>
                            </div>
                            <div className={detailservice.levelitem}>
                                    <div className={detailservice.levelname}>Chọn thời gian</div>
                                    <div className={detailservice.leveldrowcalendar}>
                                    <DatePicker 
                                    selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <img src={goright} alt="goright" className={detailservice.goright}></img>    
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                            </div>
                            <div className={detailservice.levelitemseach}></div>
                            <div className={detailservice.levelitem}>
                                <div className={detailservice.levelname}>Từ khoá</div>
                                    <div className={detailservice.searchinput}>
                                        <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                        <div className={detailservice.fi_search}>
                                        <img src={fi_search} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={detailservice.tablelistitem}>
                            <div className={detailservice.leveltable}>
                                <div className={detailservice.levelitemname} style={{width:"370px"}}>
                                    <p className={detailservice.levelitemnametitle}> Số thứ tự</p>    
                                </div>
                                <div className={detailservice.levelitemname} style={{width:"405px"}}>
                                    <p className={detailservice.levelitemnametitle}> Trạng thái </p>    
                                </div>
                            </div>
                            
                            {
                            dataServiceTable.map ( (item:any,index:any)=> 
                            <div className={detailservice.leveltablelist} key={index} >
                                <div className={detailservice.serviceitemname} style={{width:"366px"}}>
                                        <p className={detailservice.serviceitemnametitleid}>{item.number} </p>    
                                </div>
                                <div className={detailservice.levelitemnameid} style={{width:"410px"}}>
                                    <p className={`${detailservice.levelitemnametitleid} ${detailservice.id}`}>  
                                        {item.status == 'Đã hoàn thành' && <ServiceWaitPoint/>}
                                        {item.status == 'Vắng' && <ServiceUnactivePoint/>}
                                        {item.status == 'Đang thực hiện' && <ServiceUsedPoint/>}
                                    </p>       
                                </div>
                            </div>
                                        )}
                        </div>
                        <div className={detailservice.chosepape}>
                            <Page/>
                        </div> 
                        
                    </div>
                    <div className={detailservice.detail__container__update}>
                        <Link to="/listservice">
                            <div className={detailservice.eidt}>
                                    <div className="ServiceAddIMG">
                                            <img src={edit} alt="" />  
                                    </div>
                                    <div className={detailservice.add}>Cập nhập danh sách</div>
                                </div></Link> 
                            <Link to="/service">
                                    <div className={detailservice.back1}>
                                        <div className="ServiceAddIMG">
                                                <img src={back1} alt="" />  
                                        </div>
                                        <div className={detailservice.add}>Quay lại</div>
                                </div></Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = (state:any) =>{
    return {
    dataTable:state.dataAlta
    }
}
const mapDispatchToProps = (dispatch:any) =>{
    return {
        fetchData: ()=>  dispatch(fetchData()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detailservice);
