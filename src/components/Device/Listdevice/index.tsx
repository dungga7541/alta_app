import listdevice_style from "./Listdevice.module.css"
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import fi_search from"../../image/fi_search.svg"
import Dropdown from 'react-dropdown';
import '../../style/detailservice.css';
import '../../style/style.css';
import {useState, useEffect} from 'react';
import plus from "../../image/plus.svg";
import {Link} from 'react-router-dom';
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import green from '../../image/green.svg'
import red from '../../image/red.svg'
import Page from "../../Page";
function Listdevice({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData();
    }, []);
    const ServiceWaitPoint = ()=>{
        return (
            <><span className="red">
            <img src={red} alt="status action"></img>
            </span><span>Ngưng hoạt động</span>
            </>
        )
    }  
    const ServiceUsedPoint1 = ()=>{
    return (
            <><span className="green">
                <img src={green} alt='status action' ></img>    
            </span><span>Kết nối</span></>
        )
    }  
    const ServiceWaitPoint1 = ()=>{
        return (
                <><span className="red">
                <img src={red} alt='status connect'></img>
                </span><span>Mất kết nối</span>
                </>
        )
    }  
    
    
    const ServiceUsedPoint = ()=>{
    return (
            <><span className="green">
                <img src={green} alt='status action' ></img>
            </span><span>Hoạt động</span></>
        )
    }  
    const data = dataTable.dataEquiment
    const [dataEquiment,setDataEquiment] = useState(data)
    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
        ];
    const defaultOption = options[0];
    const optionsConnect = [
    'Tất cả', 'Kết nối', 'Mất kết nối'
    ];
    const handleDropdownValue = (e:any)=>{    
        if(e.value=='Hoạt động'){
                const filterdata = data.filter( (item:any) => item.status == 'Hoạt động')
                setDataEquiment(filterdata)
        }else if(e.value == 'Ngưng hoạt động') {
                const filterdata = data.filter((item:any)=> item.status == 'Ngưng hoạt động')
                setDataEquiment(filterdata)
        }
        else if(e.value == 'Ngưng hoạt động') {
                const filterdata = data.filter((item:any)=> item.status == 'Ngưng hoạt động')
                setDataEquiment(filterdata)
        }
        else if(e.value == 'Kết nối') {
                const filterdata = data.filter((item:any)=> item.connet == 'Kết nối')
                setDataEquiment(filterdata)
        }
        else{
                setDataEquiment(data)
        }
    }
    const [showMore , setShowMore] = useState(false)
    const [search , setSeatch] = useState('')
    return(
        <div className={listdevice_style.device}>
            <div className={listdevice_style.info}>
                <div className={listdevice_style.infolist}>
                    <div className={listdevice_style.title}>
                        Thiết bị 
                    </div>
                    <img src={Levelgoto} alt="levelgoto" className={listdevice_style.devicegoto}></img>
                    <div className={listdevice_style.detaillist}>
                        Danh sách thiết bị 
                    </div>
                </div>
                <div className={listdevice_style.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={listdevice_style.container}>
                <div className={listdevice_style.listtitle}>
                    Danh sách thiết bị
                </div>
                <div className={listdevice_style.devicelistdrow}>
                    <div className={listdevice_style.listitemdrow}>
                        <div className={listdevice_style.deviceitem}>
                            <div className={listdevice_style.devicename}>Trạng thái hoạt động</div>
                                <div className={listdevice_style.devicedrow}>
                                    <Dropdown options={ options}    
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                </div>
                        </div>
                        <div className={listdevice_style.deviceitem}>
                            <div className={listdevice_style.devicename}>Trạng thái kết nối</div>
                                <div className={listdevice_style.devicedrow}>
                                    <Dropdown options={optionsConnect} 
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                </div>
                        </div>
                    </div>
                    <div className={listdevice_style.deviceitemseach}>
                        <div className={listdevice_style.devicename}>Từ khoá</div>
                        <div className={listdevice_style.searchinput}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                            <div className={listdevice_style.fi_search}>
                                <img src={fi_search} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={listdevice_style.tablelistitem}>
                    <div className={listdevice_style.devicetable}>
                            <div className={listdevice_style.deviceitemname} style={{width:"110px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Mã thiết bị </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"150px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Tên thiết bị </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"145px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Địa chỉ IP </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"220px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Trạng thái hoạt động </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"180px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Trạng thái kết nối </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"450px"}}>
                                <div className={listdevice_style.deviceitemnametitle}> Dịch vụ sử dụng </div>    
                            </div>
                            <div className={listdevice_style.deviceitemname} style={{width:"82px"}}>
                                <div className={listdevice_style.deviceitemnametitle}>  </div>    
                            </div> 
                                <div className={listdevice_style.deviceitemnametitle} style={{width:"110px"}} >  </div>    
                        </div>
                        {
                        dataEquiment.map ( (item:any,index:any)=>   
                    <div className={listdevice_style.servicetablelist}key={index}>
                        <div className={listdevice_style.deviceitemname} style={{width:"110px", height:"63px"}}>
                            <div className={listdevice_style.deviceitemnametitleid}>{item.code} </div>    
                        </div>
                        <div className={listdevice_style.deviceitemname} style={{width:"150px", height:"63px"}}>
                            <div className={listdevice_style.deviceitemnametitleid}>{item.name}  </div>    
                        </div>
                        <div className={listdevice_style.deviceitemname} style={{width:"145px", height:"63px"}}>
                                
                            <div className={listdevice_style.deviceitemnametitleid}>{item.adress}  </div>  
                        </div>
                        <div className={listdevice_style.deviceitemname} style={{width:"220px", height:"63px"}}>
                            <div className={`${listdevice_style.deviceitemnametitleid} ${listdevice_style.id}`}>
                                
                                {item.status=="Ngưng hoạt động"&&<ServiceWaitPoint/>}
                                {item.status=="Hoạt động"&&<ServiceUsedPoint/>}
                        </div>    
                        </div>
                        <div className={listdevice_style.deviceitemname} style={{width:"180px", height:"63px"}}>
                            <div className={`${listdevice_style.deviceitemnametitleid} ${listdevice_style.id}`}>
                                
                                {item.connet == 'Mất kết nối' && <ServiceWaitPoint1/>}
                            {item.connet == 'Kết nối' && <ServiceUsedPoint1/>}
                        </div>    
                        </div>
                        <div className={listdevice_style.deviceitemname} style={{width:"450px", height:"63px"}}>
                                <div className={listdevice_style.deviceitemnametitleid}> 
                                    {item.node}
                                    {
                                        showMore && <div className={listdevice_style.but}> Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt,
                                        Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                                    }
                                    {
                                        !showMore && <><br /><div className={listdevice_style.button} onClick={() => setShowMore(!showMore)}> Xem thêm</div></>
                                    } 
                                </div>  
                        </div>
                        <Link to ="/device/detaildevice">
                        <div className={listdevice_style.deviceitemname} style={{width:"82px"}}>
                            <div className={listdevice_style.deviceitemlistnew}> Chi tiết  </div>    
                        </div>
                        </Link>
                        <Link to ="/device/updatedevice">
                        <div className={listdevice_style.deviceitemname}style={{width:"120px"}} >
                            <div className={listdevice_style.deviceitemlistnew}>Cập nhật </div>    
                        </div>
                        </Link>
                    </div>
                    )
                }
            </div>
            <Link to= "/device/add-device">   
                <div className={listdevice_style.add}>
                        <div className={listdevice_style.adddevice}>
                                <img src={plus} alt="" />  
                        </div>
                        <div className={listdevice_style.devicetitlename}> Thêm thiết bị </div>
                </div>
            </Link>   
            <div className={listdevice_style.chosepape}>
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
export default connect(mapStateToProps,mapDispatchToProps)(Listdevice)
