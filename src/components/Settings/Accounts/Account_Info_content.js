import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./account_info_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Tên vai trò</a>
                            </div>
                            <div className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Ngưng hoạt động">Ngưng hoạt động</option>
                                        <option className={style.combobox_content_option} value="Hoạt Động">Hoạt Động</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        
                        <div>
                            <div className={style.combobox_title}>
                                <a>Từ khóa</a>
                            </div>
                            <div className={style.combobox_content}>
                                <div>
                                    <form action="/action_page.php">
                                    <input className={style.combobox_content_select} type="text" placeholder="Nhập từ khóa " name="search"/>
                                    <button className={style.search_icon} type="submit"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <table className={style.table_device}>
                        <tr>
                            <th>Tên đặng nhập</th>
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Trạng thái hoạt động</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>Nguyễn Văn A</td>
                            <td>0919256712</td>   
                            <td>tuyetnguyen123@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@10</td>
                            <td>Nguyễn Văn B</td>
                            <td>0919236712</td>
                            <td>tuyetnguyen123@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@22</td>
                            <td>Nguyễn Văn C</td>
                            <td>0919116712</td>
                            <td>tuyetnguyen222@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@18</td>
                            <td>Nguyễn Văn D</td>
                            <td>0919253715</td>
                            <td>tuyetnguyen232@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@19</td>
                            <td>Nguyễn Văn T</td>
                            <td>0919233712</td>
                            <td>tuyetnguyen244@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@18</td>
                            <td>Nguyễn Văn K</td>
                            <td>0919277712</td>
                            <td>tuyetnguyen242@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@16</td>
                            <td>Nguyễn Văn N</td>
                            <td>0919257008</td>
                            <td>tuyetnguyen122@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@14</td>
                            <td>Nguyễn Văn M</td>
                            <td>0919258003</td>
                            <td>tuyetnguyen227@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@13</td>
                            <td>Nguyễn Văn L</td>
                            <td>0919251274</td>
                            <td>tuyetnguyen278@gmail.com</td>
                            <td>Kế toán</td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                    </table>
                    <div>
                        <div className={style.nextpage}>
                            <a className={`${style.caret_left} fas fa-caret-left`}></a>
                            <a className={style.page_active}>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                            <a>...</a>
                            <a>10</a>
                            <a className={`${style.caret_right} fas fa-caret-right`}></a>
                        </div>
                    </div>
                    
                </div>
                <div className={style.add_device}>
                    <div className={style.total_add_device}>
                        <div className={`${style.add} fas fa-plus`} onClick={() => history.push('/device_add')}></div>
                        <div className={style.add_title}><a>Thêm tài khoản</a></div>
                    </div>
                </div>
            </div>
        );
    }
