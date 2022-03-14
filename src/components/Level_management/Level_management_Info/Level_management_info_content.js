import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import style from "./level_management_info_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
export default function Dashboard_content() {
        const history = useHistory();
        return (
            <div className={style.container}>
                <div className={style.content_container}>
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <a>Thông tin cấp số</a>
                        </div>
                        <div className={style.bottom_content}>

                        </div>
                    </div>
                    <div className={style.bottom_container}>
                        <div className={style.bottom_content}>
                            <div className={style.middle_content}>
                                <div className={style.left_title}>
                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Họ tên:</a>
                                            <a className={style.sub_title}>Nguyễn Thị Dung</a>

                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Tên dịch vụ:</a>
                                            <a className={style.sub_title}>Khám tim mạch</a>
                                            
                                        </div>
                                    </div>
                                    <div className={style.role}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Số thứ tự:</a>
                                            <a className={style.sub_title}>2001201</a>
                                        </div>
                                    </div>

                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Thời gian cấp:</a>
                                            <a className={style.sub_title}>14:35 - 07/11/2021</a>

                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Hạn sử dụng:</a>
                                            <a className={style.sub_title}>18:00 - 07/11/2021</a>
                                            
                                        </div>
                                    </div>

                                </div>  
                                <div className={style.right_title}>
                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Nguồn cấp:</a>
                                            <a className={style.sub_title}>Kiosk</a>
                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Trạng thái:</a>
                                            <a className={style.sub_title}>Đang chờ</a>
                                        </div>
                                    </div>
                                    <div className={style.role}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Số điện thoại:</a>
                                            <a className={style.sub_title}>0948523623</a>
                                        </div>
                                    </div>
                                    
                                    <div className={style.username}>
                                        <div className={style.content_title}>
                                            <a className={style.main_title}>Địa chỉ Email:</a>
                                            <a className={style.sub_title}>nguyendung@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={style.add_device}>
                    <div className={style.total_add_device}>
                        <div className={`${style.add} fas fa-undo-alt`}></div>
                        <div className={style.add_title}><a>Quay lại</a></div>
                    </div>
                </div>
            </div>
        );
    }
