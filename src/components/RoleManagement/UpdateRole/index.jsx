import updaterole_style from './UpdateRole.module.css'
import Listitem from '../../Listitem'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../../image/gotoright.svg";
import {useState} from 'react'
import star from '../../image/star.svg'
function UpdateRole(){
    const [nameAddRole, setNameAddRole] = useState()
    const [desService , setDesService] = useState()
    return(
        <div className={updaterole_style.listrole}>
            <Listitem/>
            <div className={updaterole_style.listroleright}>
                <div className={updaterole_style.role}>
                    <div className={updaterole_style.roleinfo}>
                        <div className={updaterole_style.roleinfolist}>
                            <p className={updaterole_style.roletitle}>
                                Cài đặt hệ thống
                            </p>
                            <img src={rolegoto} alt="rolegoto" className={updaterole_style.rolegoto}></img>
                            <Link to='/dashboard/RoleManagement'>
                                <p className={updaterole_style.roletitle}>
                                    Quản lý vai trò
                                </p>
                            </Link>
                            <img src={rolegoto} alt="rolegoto" className={updaterole_style.rolegoto}></img>
                            <p className={updaterole_style.rolelist }>
                                Cập nhật vai trò
                            </p>
                        </div>
                            <div className={updaterole_style.bell}>
                                <Bellactive/>
                            </div>
                    </div>
                    <div className={updaterole_style.rolecontainer}>
                            <div className={updaterole_style.rolelisttitle}>
                                Danh sách vai trò
                            </div>
                            <div className={updaterole_style.tablelistitem}>
                                <div className={updaterole_style.tableltilte}>
                                    Thông tin vai trò
                                </div>
                                <div className={updaterole_style.tablelcontainer}>
                                    <div className={updaterole_style.tablelcontainer__right}>
                                        <div className={updaterole_style.tablelcontainer__Input}>
                                            <div className={updaterole_style.tablelcontainer__items}>
                                                <div className={updaterole_style.tablelcontainer__rolename}>
                                                    <div className={updaterole_style.table__title}>
                                                    <p className={updaterole_style.title}> Tên vai trò </p> 
                                                        <img src={star} alt='star' className={updaterole_style.starid}></img>
                                                    </div>
                                                    <div className={updaterole_style.tablelcontainer__text}>
                                                        <input type="text" value={nameAddRole} onChange={ e=> setNameAddRole(e.target.value)} placeholder="Nhập tên vai trò"  />
                                                    </div>
                                                </div>
                                                <div className={updaterole_style.tablelcontainer__rolename1}>
                                                    <div className={updaterole_style.table__title}>
                                                    <p className={updaterole_style.title}> Mô tả: </p> 
                                                        
                                                    </div>
                                                    <div className={updaterole_style.tablelcontainer__text}>
                                                        <textarea rows={4} cols={50} placeholder="Nhập mô tả" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                                    </div>
                                                </div>
                                                <div className={updaterole_style.nameitem}>
                                                    <img src={star} alt='star' className={updaterole_style.star}></img>
                                                    <p className={updaterole_style.nametitle}> Là trường thông tin bắt buộc</p>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className={updaterole_style.tablelcontainer__left}>
                                        <div className={updaterole_style.table__title}>
                                            <p className={updaterole_style.title}> Phân quyền chức năng </p> 
                                            <img src={star} alt='star' className={updaterole_style.starid}></img>
                                        </div>
                                        <div className={updaterole_style.tablelist}>
                                            <div className={updaterole_style.tablelistgroup}>
                                                <div className={updaterole_style.tablegroupA}>
                                                        Nhóm chức năng A
                                                </div>
                                                <div className={updaterole_style.tablegroup___checkbox}>
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className={updaterole_style.tablelistgroup}>
                                                <div className={updaterole_style.tablegroupA}>
                                                        Nhóm chức năng B
                                                </div>
                                                <div className={updaterole_style.tablegroup___checkbox}>
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className={updaterole_style.tablelistgroup}>
                                                <div className={updaterole_style.tablegroupA}>
                                                        Nhóm chức năng C
                                                </div>
                                                <div className={updaterole_style.tablegroup___checkbox}>
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={updaterole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={updaterole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={updaterole_style.contaniner__button}>
                                <div className={updaterole_style.contaniner__cancel}>
                                    <Link to="/dashboard/RoleManagement"><button>Hủy bỏ</button></Link>
                                </div>
                                <div className={updaterole_style.contaniner__addrole}>
                                    <Link to='/dashboard/RoleManagement'><button>Cập nhật</button></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  UpdateRole;