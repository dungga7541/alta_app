import listitemservice from './Listitemservice.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import levelgoto     from "../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import '../../style/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../../image/fi_search.svg"
import {useState ,useEffect} from 'react';
import goright from "../../image/goright.svg";
import red from '../../image/red.svg'
import green from '../../image/green.svg'
import Page from "../../Page";
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import plus from "../../image/plus.svg";
function Listitemservice({dataTable,fetchData, }:any){
    useEffect(() => {
        fetchData();
    }, []);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [search , setSearch] = useState('')
    const ServiceWaitPoint = ()=>{
        return (
            <><span className="green">
                <img src={green} alt="green"></img>
            </span><span>Hoạt động</span></>
        )
    }  
    const ServiceUsedPoint = ()=>{
    return (
            <><span className="black">
                <img src={red} alt="green" ></img>
            </span><span>Ngưng hoạt động</span></>
        )
    }  
    const data = dataTable.dataService
    const [dataServiceTable  , setDataServiceTable] = useState(data)
    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
    ];
const defaultOption = options[0];
        const handleDropdownValue = (e: any)=>{
            if(e.value=='Hoạt động'){
                    const filterdata = data.filter( (item:any)=> item.status == 'Hoạt động')
                    setDataServiceTable(filterdata)
            }else if(e.value=='Ngưng hoạt động') {
                const filterdata = data.filter((item:any) => item.status == 'Ngưng hoạt động')
                setDataServiceTable(filterdata)
            }
            else{
                    setDataServiceTable(data)
            }
        }
    return (
        <div className={listitemservice.service}>
            <div className={listitemservice.serviceinfo}>
                <div className={listitemservice.serviceinfolist}>
                    <p className={listitemservice.servicetitle}>
                        Dịch vụ
                    </p>
                        <img src={levelgoto} alt="levelgoto" className={listitemservice.servicegoto}></img>
                    <p className={listitemservice.servicelist }>
                        Danh sách dịch vụ
                    </p>
                </div>
                <div className={listitemservice.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={listitemservice.servicecontainer}>
                <div className={listitemservice.servicelisttitle}>
                    Quản lý dịch vụ
                </div>
                <div className={listitemservice.service_taskbar}>
                    <div className={listitemservice.serviceitemdrow}>  
                        <div className={listitemservice.service_item}>
                            <div className={listitemservice.taskbar_name}>Tên vai trò</div>
                                <div className={listitemservice.servicedrow}>
                                    <Dropdown options={options}  
                                        onChange={(e)=>handleDropdownValue(e)} 
                                        value={defaultOption} placeholder="Select an option" />
                                </div>
                        </div>
                        <div className={listitemservice.service_item}>
                            <div className={listitemservice.taskbar_name}>Chọn thời gian</div>
                                <div className={listitemservice.servicedrowcalendar}>
                                    
                                    <DatePicker 
                                    selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <img src={goright} alt="goright" className={listitemservice.goright}></img>    
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                        </div>
                    </div>
                        <div className={listitemservice.serviceitem}>
                            <div className={listitemservice.taskbar_name}>Từ khoá</div>
                                <div className={listitemservice.servicedrow}>
                                <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                <div className={listitemservice.fi_search}>
                                    <img src={fi_search} alt="" />
                                </div>
                                </div>
                        </div>
                </div>
                <div className={listitemservice.tablelistitem}>
                    <div className={listitemservice.service_table}>
                        <div className={listitemservice.serviceitemname} style={{width:"200px"}}>
                            <p className={listitemservice.serviceitemnametitle}> Mã dịch vụ </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"300px"}}>
                            <p className={listitemservice.serviceitemnametitle}> Tên dịch vụ  </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"300px"}}>
                            <p className={listitemservice.serviceitemnametitle}> Mô tả </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"400px"}}>
                            <p className={listitemservice.serviceitemnametitle}> Trạng thái hoạt động </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"150px"}}>
                            <p className={listitemservice.serviceitemnametitle}>  </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"160px"}}>
                            <p className={listitemservice.serviceitemnametitle}>  </p>    
                        </div>
                    </div>
                    {
                        dataServiceTable.map ( (item:any,index:any)=>   
                    <div className={listitemservice.service_table_list} key={index}>
                        <div className={listitemservice.serviceitemname} style={{width:"200px"}}>
                            <p className={listitemservice.serviceitemnametitleid}>{item.code} </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"300px"}}>
                            <p className={listitemservice.serviceitemnametitleid}>{item.name}  </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"300px"}}>
                            <p className={listitemservice.serviceitemnametitleid}> {item.des}  </p>    
                        </div>
                        <div className={listitemservice.serviceitemname} style={{width:"400px"}}>
                        <p className={`${listitemservice.levelitemnametitleid} ${listitemservice.id}`}>  
                            {item.status == 'Hoạt động' && <ServiceWaitPoint/>}
                            {item.status == 'Ngưng hoạt động' && <ServiceUsedPoint/>}
                        </p>    
                        </div>
                        <Link to ="./detailservice">
                        <div className={listitemservice.serviceitemname} style={{width:"150px"}}>
                            <div className={listitemservice.serviceitemlistnew}> Chi tiết  </div>    
                        </div>
                        </Link >
                        <Link to ="/listservice">
                        <div className={listitemservice.serviceitemname} style={{width:"158px"}}>
                            <div className={listitemservice.serviceitemlistnew}> Cập nhật </div>    
                        </div>
                        </Link>
                    </div>
                    )
                    }
            </div>
        </div>
            <Link to= '/listservice'>  <div className={listitemservice.add}>
                    <div className={listitemservice.addservice}>
                        <img src={plus} alt="" />  
                    </div>
                    <p className={listitemservice.servicetitlename}> Thêm dịch vụ</p>
                </div>
            </Link>    
            <div className={listitemservice.chosepape}>
                <Page/>
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
export default connect(mapStateToProps,mapDispatchToProps)(Listitemservice);
