import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./activity_log_content_style.module.css";
import DatePicker from "react-datepicker";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        const [startDate, setStartDate] = useState(new Date());
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div className={style.left_content}>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />                        </div>
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
                            <th>Tên đăng nhập</th>
                            <th>Thời gian tác động</th>
                            <th>IP thực hiện</th>
                            <th>Thao tác thực hiện</th>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        <tr>
                            <td>tuyetnguyen@12</td>
                            <td>01/12/2021 15:12:17</td>
                            <td>192.168.3.1</td>
                            <td>Cập nhật thông tin dịch vụ DV_01</td>
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
            </div>
        );
    }
