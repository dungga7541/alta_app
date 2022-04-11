import listaccount from './Listaccount.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import plus from "../../image/plus.svg";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../../image/fi_search.svg"
import Page from "../../Page";
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import green from '../../image/green.svg'
import red from '../../image/red.svg'

function Listaccount({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData()
    },[])
    const   dataUserList = dataTable.dataUserList
    const ServiceUsedPoint = ()=>{
        return (
            <><span className="green">
                <img src={green} alt='green' ></img>
            </span><span>Hoạt động</span></>
        )
    } 
        const ServiceUnactivePoint = ()=>{
            return (  <><span className="red">
                <img src={red} alt="red"></img>
                </span><span>Ngưng hoạt động</span></>
            ) 
        }
    const options = [
        'Tất cả', 'Kế toán', 'Quản lý' , 'Admin'
    ];

    const defaultOption = options[0]

    const handleDropdownValue = (e:any)=>{
        console.log(e.value);
    }
    const [search , setSeatch] = useState('')

    return(
    <div className={listaccount.account}>
        <div className={listaccount.accountinfo}>
            <div className={listaccount.accountinfolist}>
                <p className={listaccount.accounttitle}>
                    Cài đặt hệ thống
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={listaccount.go}></img>
                <p className={listaccount.accountlist}>
                    Quản lý tài khoản
                </p>
            </div>
            <div className={listaccount.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={listaccount.accountcontainer}>
            <div className={listaccount.accountlisttitle}>
                Danh sách tài khoản
            </div>
            <div className={listaccount.accountlistdrow}>
                <div className={listaccount.accountitemdrow}>                 
                    <div className={listaccount.accountitem}>
                        <div className={listaccount.rolename}>Tên vai trò</div>
                            <div className={listaccount.accountdrow}>
                                <Dropdown options={options}  
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption } placeholder="Select an option" />
                            </div>
                    </div>
                    <div className={listaccount.accountitem}>
                        <div className={listaccount.keyword}>Từ khoá</div>
                            <div className={listaccount.accountdrow}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                            <div className={listaccount.fi_search}>
                                <img src={fi_search} alt="fi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={listaccount.tablelistitem}>
                <div className={listaccount.accounttable}>
                    <div className={listaccount.accountitemname} style={{width:"230px"}}>
                        <p className={listaccount.accountitemnametitle}> Tên đăng nhập </p>    
                    </div>
                    <div className={listaccount.accountitemname} style={{width:"230px"}}>
                        <p className={listaccount.accountitemnametitle}> Họ tên </p>    
                    </div>
                    <div className={listaccount.accountitemname} style={{width:"200px"}}>
                        <p className={listaccount.accountitemnametitle}> Số điện thoại </p>    
                    </div>
                    <div className={listaccount.accountitemname} style={{width:"300px"}}>
                        <p className={listaccount.accountitemnametitle}> Email </p>    
                    </div>
                    <div className={listaccount.accountitemname} style={{width:"180px"}}>
                        <p className={listaccount.accountitemnametitle}> Vai trò </p>    
                    </div>
                    <div className={listaccount.accountitemname} style={{width:"250px"}}>
                        <p className={listaccount.accountitemnametitle}> Trạng thái hoạt động</p>    
                    </div>
                        <p className={listaccount.accountitemnametitle}>  </p>    
                </div>

                {
                    dataUserList.map( (item:any,index:any) =>
                    <div className={listaccount.accounttablelist} key={index}>
                        <div className={listaccount.accountitemname} style={{width:"230px",height:"60px"}}>
                            <p className={listaccount.accountitemnametitleid}> {item.id} </p>    
                        </div>
                        <div className={listaccount.accountitemname} style={{width:"230px",height:"60px"}}>
                            <p className={listaccount.accountitemnametitleid}> {item.name} </p>    
                        </div>
                        <div className={listaccount.accountitemname} style={{width:"200px",height:"60px"}}>
                            <p className={listaccount.accountitemnametitleid}> {item.phone}</p>    
                        </div>
                        <div className={listaccount.accountitemname} style={{width:"300px",height:"60px"}}>
                            <p className={listaccount.accountitemnametitleid}> {item.email} </p>    
                        </div>
                        <div className={listaccount.accountitemname} style={{width:"180px",height:"60px"}}>
                            <p className={listaccount.accountitemnametitleid}> {item.role} </p>    
                        </div>
                        <div className={listaccount.accountitemname} style={{width:"250px",height:"60px"}}>
                            <p className={`${listaccount.levelitemnametitleid} ${listaccount.id}`}>
                            {item.status == 'Hoạt động' && <ServiceUsedPoint/>}
                            {item.status == 'Ngưng hoạt động' && <ServiceUnactivePoint/>}  </p>    
                        </div>
                        <Link to= '/dashboard/AccountManagement/Updateaccount' className={listaccount.accountitemlistnew}>
                            cập nhập 
                        </Link>   
                    </div>
                )}
            </div>
        </div>  
        <Link to= '/dashboard/AccountManagement/addaccount'>  
            <div className={listaccount.add}>
                <div className={listaccount.addaccount}>
                    <img src={plus} alt="" />  
                </div>
                <p className={listaccount.accounttitlename}>Thêm tài khoản</p>
            </div>
        </Link>      
            <div className={listaccount.chosepape}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Listaccount)
