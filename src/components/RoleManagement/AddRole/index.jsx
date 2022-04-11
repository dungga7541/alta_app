import addrole_style from './AddRole.module.css'
import Listitem from '../../Listitem'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../../image/gotoright.svg";
import {useState} from 'react'
import star from '../../image/star.svg'
function AddRole(){
    const [nameAddRole, setNameAddRole] = useState()
    const [desService , setDesService] = useState()
    // const [desAddRole , setDesAddRole] = useState<string>()
    return(
        <div className={addrole_style.listrole}>
            <Listitem/>
            <div className={addrole_style.listroleright}>
                <div className={addrole_style.role}>
                    <div className={addrole_style.roleinfo}>
                        <div className={addrole_style.roleinfolist}>
                            <p className={addrole_style.roletitle}>
                                Cài đặt hệ thống
                            </p>
                            <img src={rolegoto} alt="rolegoto" className={addrole_style.rolegoto}></img>
                            <Link to='/dashboard/RoleManagement'>
                            <p className={addrole_style.roletitle}>
                                Quản lý vai trò
                            </p>
                            </Link>
                            <img src={rolegoto} alt="rolegoto" className={addrole_style.rolegoto}></img>
                            <p className={addrole_style.rolelist }>
                                Thêm vai trò
                            </p>
                        </div>
                            <div className={addrole_style.bell}>
                                <Bellactive/>
                            </div>
                    </div>
                    <div className={addrole_style.rolecontainer}>
                            <div className={addrole_style.rolelisttitle}>
                                Danh sách vai trò
                            </div>
                            <div className={addrole_style.tablelistitem}>
                                <div className={addrole_style.tableltilte}>
                                    Thông tin vai trò
                                </div>
                                <div className={addrole_style.tablelcontainer}>
                                    <div className={addrole_style.tablelcontainer__right}>
                                        <div className={addrole_style.tablelcontainer__Input}>
                                            <div className={addrole_style.tablelcontainer__items}>
                                                <div className={addrole_style.tablelcontainer__rolename}>
                                                    <div className={addrole_style.table__title}>
                                                    <p className={addrole_style.title}> Tên vai trò </p> 
                                                        <img src={star} alt='star' className={addrole_style.starid}></img>
                                                    </div>
                                                    <div className={addrole_style.tablelcontainer__text}>
                                                        <input type="text" value={nameAddRole} onChange={ e=> setNameAddRole(e.target.value)} placeholder="Nhập tên vai trò"  />
                                                    </div>
                                                </div>
                                                <div className={addrole_style.tablelcontainer__rolename1}>
                                                    <div className={addrole_style.table__title}>
                                                    <p className={addrole_style.title}> Mô tả: </p> 
                                                        
                                                    </div>
                                                    <div className={addrole_style.tablelcontainer__text}>
                                                        <textarea rows={4} cols={50} placeholder="Nhập mô tả" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                                    </div>
                                                </div>
                                                <div className={addrole_style.nameitem}>
                                                    <img src={star} alt='star' className={addrole_style.star}></img>
                                                    <p className={addrole_style.nametitle}> Là trường thông tin bắt buộc</p>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className={addrole_style.tablelcontainer__left}>
                                        <div className={addrole_style.table__title}>
                                            <p className={addrole_style.title}> Phân quyền chức năng </p> 
                                            <img src={star} alt='star' className={addrole_style.starid}></img>
                                        </div>
                                        <div className={addrole_style.tablelist}>
                                            <div className={addrole_style.tablelistgroup}>
                                                <div className={addrole_style.tablegroupA}>
                                                        Nhóm chức năng A
                                                </div>
                                                <div className={addrole_style.tablegroup___checkbox}>
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className={addrole_style.tablelistgroup}>
                                                <div className={addrole_style.tablegroupA}>
                                                        Nhóm chức năng B
                                                </div>
                                                <div className={addrole_style.tablegroup___checkbox}>
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className={addrole_style.tablelistgroup}>
                                                <div className={addrole_style.tablegroupA}>
                                                        Nhóm chức năng C
                                                </div>
                                                <div className={addrole_style.tablegroup___checkbox}>
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Tất cả</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng x</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng y</p>
                                                    </div> 
                                                    <div className={addrole_style.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={addrole_style.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={addrole_style.contaniner__button}>
                                <div className={addrole_style.contaniner__cancel}>
                                    <Link to="/dashboard/RoleManagement"><button>Hủy bỏ</button></Link>
                                </div>
                                <div className={addrole_style.contaniner__addrole}>
                                    <Link to='/dashboard/RoleManagement'><button>Thêm</button></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  AddRole;