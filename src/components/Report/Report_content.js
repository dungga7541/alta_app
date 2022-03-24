import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./report_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Report_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Chọn thời gian</a>
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
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <table className={style.table_device}>
                        <tr>
                            <th>Số thứ tự <span  className={`${style.caret_sort} fas fa-sort`}></span></th>
                            <th>Tên dịch vụ <span  className={`${style.caret_sort} fas fa-sort`}></span></th>
                            <th>Thời gian cấp <span  className={`${style.caret_sort} fas fa-sort`}></span></th>
                            <th>Tình trạng <span  className={`${style.caret_sort} fas fa-sort`}></span></th>
                            <th>Nguồn cấp <span  className={`${style.caret_sort} fas fa-sort`}></span></th>
                        </tr>
                        <tr>
                            <td>2010001</td>
                            <td>Khám tim mạch</td>
                            <td>07:20 - 07/10/2021</td>   
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td>Kiosk</td>

                        </tr>
                        <tr>
                            <td>2010002</td>
                            <td>Răng hàm mặt</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Hệ thống</td>
                        </tr>
                        <tr>
                            <td>2010003</td>
                            <td>Khám sản - phụ khoa</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Kiosk</td>
                        </tr>
                        <tr>
                            <td>2010004</td>
                            <td>Răng hàm mặt</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td>Hệ thống</td>
                        </tr>
                        <tr>
                            <td>2010005</td>
                            <td>Tai mũi họng</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Kiosk</td>
                        </tr>
                        <tr>
                            <td>2010006</td>
                            <td>Khám tổng quát</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Hệ thống</td>
                        </tr>
                        <tr>
                            <td>2010007</td>
                            <td>Khám hô hấp</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td>Kiosk</td>
                        </tr>
                        <tr>
                            <td>2010008</td>
                            <td>Khám hô hấp</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.gray_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Kiosk</td>
                        </tr>
                        <tr>
                            <td>2010009</td>
                            <td>Tai mũi họng</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Hệ thống</td>
                        </tr>
                        <tr>
                            <td>20100010</td>
                            <td>Khám sản - phụ khoa</td>
                            <td>07:20 - 07/10/2021</td>
                            <td><span  className={`${style.blue_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td>Hệ thống</td>                        </tr>
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
                        <div className={`${style.add} fas fa-file-download`} onClick={() => history.push('/device_add')}></div>
                        <div className={style.add_title}><a>Tải về</a></div>
                    </div>
                </div>
            </div>
        );
    }
