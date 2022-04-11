import rolemanagement from './RoleManagement.module.css'
import Listitem from '../Listitem'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../image/gotoright.svg";
import plus from "../image/plus.svg";
import React, { useState,useEffect } from "react";
import {connect} from 'react-redux';
import {fetchData,SENDDATAROLEMANAGEMENT} from '../../redux/DatAlta/DataAltaActions'

function RoleManagement({dataTable,fetchData,SENDDATAROLEMANAGEMENT}:any ){
    useEffect(() => {
        fetchData()
    },[])
    const dataRoleTableDetail = dataTable.dataRole
    const handleSend = (data:any) => {
        SENDDATAROLEMANAGEMENT(data)
    }
    return(
        <div className={rolemanagement.listrole}>
            {/* <Listitem/> */}
            <div className={rolemanagement.listroleright}>
                <div className={rolemanagement.role}>
                    <div className={rolemanagement.roleinfo}>
                        <div className={rolemanagement.roleinfolist}>
                            <p className={rolemanagement.roletitle}>
                                Cài đặt hệ thống
                            </p>
                            <img src={rolegoto} alt="rolegoto" className={rolemanagement.rolegoto}></img>
                            <p className={rolemanagement.rolelist }>
                                Quản lý vai trò
                            </p>
                        </div>
                            <div className={rolemanagement.bell}>
                                <Bellactive/>
                            </div>
                    </div>  
                        <div className={rolemanagement.rolecontainer}>
                            <div className={rolemanagement.rolelisttitle}>
                                    Danh sách vai trò
                            </div>
                            <div className={rolemanagement.tablelistitem}>
                                <div className={rolemanagement.roletable}>
                                    <div className={rolemanagement.roleitemname} style={{width:"300px"}}>
                                        <p className={rolemanagement.roleitemnametitle}> Tên vai trò </p>    
                                    </div>
                                    <div className={rolemanagement.roleitemname} style={{width:"300px"}}>
                                        <p className={rolemanagement.roleitemnametitle}> Số người dùng </p>    
                                    </div>
                                    <div className={rolemanagement.roleitemname} style={{width:"1000px"}}>
                                        <p className={rolemanagement.roleitemnametitle}> Mô tả </p>    
                                    </div>
                                    <div className={rolemanagement.roleitemname} style={{width:"300px"}}>
                                        <p className={rolemanagement.roleitemnametitle}>  </p>    
                                    </div>
                                </div>
                                {
                                    dataRoleTableDetail.map ((item:any,index:any)=>
                                    <div className={rolemanagement.leveltablelist}key={index} >
                                        <div className={rolemanagement.levelitemname} style={{width:"300px"}}>
                                            <p className={rolemanagement.levelitemnametitleid}>{item.name}</p>    
                                        </div>
                                        <div className={rolemanagement.levelitemname} style={{width:"300px"}}>
                                            <p className={rolemanagement.levelitemnametitleid}>{item.users}</p>    
                                        </div>
                                        <div className={rolemanagement.levelitemname} style={{width:"1000px"}}>
                                            <p className={rolemanagement.levelitemnametitleid}>{item.des}</p>    
                                        </div>
                                        <div className={rolemanagement.roleitemname} style={{width:"300px"}}>
                                            <Link to='/dashboard/RoleManagement/update-role-management'>
                                                <p className={rolemanagement.roleitemnametitleid1}>   
                                                    <span onClick={ () => handleSend(item)}>
                                                            Cập nhập
                                                    </span>
                                                </p>    
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                            </div>
                        </div>
                        <Link to= "/dashboard/RoleManagement/add-role-management">
                            <div className={rolemanagement.add}>
                                <div className={rolemanagement.addrole}>
                                        <img src={plus} alt="" />  
                                </div>
                                <p className={rolemanagement.roletitlename}> Thêm vai trò</p>
                            </div>
                        </Link>  
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
        SENDDATAROLEMANAGEMENT: (data:any)=> dispatch(SENDDATAROLEMANAGEMENT(data))  
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RoleManagement)