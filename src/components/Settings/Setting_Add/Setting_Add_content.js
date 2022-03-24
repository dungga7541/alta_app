import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./setting_add_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        
                        <div className={style.right_content}>
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
                            <th>Tên vai trò</th>
                            <th>Số người dùng</th>
                            <th>Mô tả</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Kế toán</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>Bác sĩ</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>Lễ tân</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>Quản lý</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>Superadmin</td>
                            <td>6</td>
                            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                            <td><Link to="/device_info">Cập nhập</Link></td>
                        </tr>
                    </table>
                </div>
                <div className={style.add_device}>
                    <div className={style.total_add_device}>
                        <div className={`${style.add} fas fa-plus`} onClick={() => history.push('/device_add')}></div>
                        <div className={style.add_title}><a>Thêm vai trò</a></div>
                    </div>
                </div>
            </div>
        );
    }
