import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./level_management_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Tên dịch vụ</a>
                            </div>
                            <div className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</option>
                                        <option className={style.combobox_content_option} value="Khám răng hàm mặt">Khám răng hàm mặt</option>
                                        <option className={style.combobox_content_option} value="Khám tai mũi họng">Khám tai mũi họng</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Tình trạng</a>
                            </div>
                            <div  className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Đang chờ">Đang chờ</option>
                                        <option className={style.combobox_content_option} value="Đã sử dụng">Đã sử dụng</option>
                                        <option className={style.combobox_content_option} value="Bỏ qua">Đã sử dụng</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Nguồn cấp</a>
                            </div>
                            <div  className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Kiosk">Kiosk</option>
                                        <option className={style.combobox_content_option} value="Hệ thống">Hệ thống</option>
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
                            <th>STT</th>
                            <th>Tên khách hàng</th>
                            <th>Tên dịch vụ </th>
                            <th>Thời gian cấp</th>
                            <th>Hạn sử dụng</th>
                            <th>Trạng thái</th>
                            <th>Nguồn cấp</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>2010001</td>
                            <td>Lê Huỳnh Ái Vân</td>
                            <td>Khám tim mạch</td>   
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang chờ</td>
                            <td>Kiosk</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010002</td>
                            <td>Huỳnh Ái Vân</td>
                            <td>Khám sản - Phụ Khoa</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Đã sử dụng</td>
                            <td>Kiosk</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010003</td>
                            <td>Lê Ái Vân</td>
                            <td>Khám răng hàm mặt</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang chờ</td>
                            <td>Hệ thống</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010004</td>
                            <td>Nguyễn Ái Vân</td>
                            <td>Khám tai mũi họng</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang chờ</td>
                            <td>Hệ thống</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010005</td>
                            <td>Trần Thị Ái Vân</td>
                            <td>Khám hô hấp</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Đang chờ</td>
                            <td>Kiosk</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010006</td>
                            <td>Lê Huỳnh Nghĩa</td>
                            <td>Khám tổng quát</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Đã sử dụng</td>
                            <td>Hệ thống</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td>Lê Huỳnh Nghĩa</td>
                            <td>Khám tai mũi họng</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Đã sử dụng</td>
                            <td>Kiosk</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010008</td>
                            <td>Lê Huỳnh Đức</td>
                            <td>Khám tổng quát</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Bỏ qua</td>
                            <td>Hệ thống</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
                        </tr>
                        <tr>
                            <td>2010009</td>
                            <td>Kiosk</td>
                            <td>Khám tai mũi họng</td>
                            <td>14:35 - 07/11/2021</td>
                            <td>14:35 - 12/11/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Đã sử dụng</td>
                            <td>Hệ thống</td>
                            <td><Link to="/device_info">Chi tiết</Link></td>
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
                        <div className={style.add_title}><a>Cấp số mới</a></div>
                    </div>
                </div>
            </div>
        );
    }
