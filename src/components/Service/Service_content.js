import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./service_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Trạng thái hoạt động</a>
                            </div>
                            <div className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Hoạt Động">Hoạt Động</option>
                                        <option className={style.combobox_content_option} value="Ngưng hoạt động">Ngưng hoạt động</option>
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
                            <th>Mã dịch vụ</th>
                            <th>Tên dịch vụ</th>
                            <th>Mô tả</th>
                            <th>Trạng thái hoạt động</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Mô tả dịch vụ 1</td>   
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/service_update" >Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>

                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>

                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                            <td><Link to="/device_update">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động </td>
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
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
                        <div className={`${style.add} fas fa-plus`} onClick={() => history.push('/service_add')}></div>
                        <div className={style.add_title}><a>Thêm dịch vụ</a></div>
                    </div>
                </div>
            </div>
        );
    }
